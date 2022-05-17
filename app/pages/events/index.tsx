import React, { FC, useEffect, useState } from "react"
import { FlatList } from "react-native"
import Toast from "react-native-toast-message"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { IUserEvent } from "../../types"
import useAuth from "../../hooks/useAuth"
import useModal from "../../hooks/useModal"
import usersApi from "../../api/users"
import modals from "../../config/modals"
import routes from "../../config/routes"
import { formatDate } from "../../utils"
import ModalLayout from "../../layouts/ModalLayout"
import Text from "../../components/Text"

const EventsPage: FC = () => {
  const navigation = useNavigation()
  const { user } = useAuth()
  const { toggleModal } = useModal()
  const [events, setEvents] = useState<IUserEvent[]>([])

  const fetchEvents = async () => {
    const response = await usersApi.getEvents(user?._id)

    if (response.ok && response?.data) {
      setEvents(response.data)
    }
  }

  const isUserWaitlisted = (event: IUserEvent) => {
    if (!user?._id) return false

    return event.waitlistedUsers.includes(user._id)
  }

  const updateEvent = (selectedEvent: IUserEvent, isWaitlisted: boolean) => {
    setEvents(
      events.map((event: IUserEvent) => {
        if (event._id === selectedEvent._id)
          return {
            ...event,
            ...(!isWaitlisted && {
              seatsLeft: event.registered
                ? event.seatsLeft + 1
                : event.seatsLeft - 1
            }),
            registered: !event.registered
          }

        return event
      })
    )
  }

  const handleSelect = (selectedEvent: IUserEvent) => async () => {
    if (!user) {
      navigation.navigate(routes.LOGIN, {
        returnPage: routes.EVENTS
      })
    }

    if (!selectedEvent.registered) {
      toggleModal(modals.REGISTER_EVENT)
      return
    }

    toggleModal(modals.UNREGISTER_EVENT)
  }

  const handleRegister = (selectedEvent: IUserEvent) => async () => {
    const isWaitlisted = isUserWaitlisted(selectedEvent)

    updateEvent(selectedEvent, isWaitlisted)
    toggleModal(modals.REGISTER_EVENT)
    Toast.show({
      type: "success",
      text1: isWaitlisted ? "Waitlisted!" : "Registered!"
    })

    if (user?._id) {
      await usersApi.registerEvent(user._id, selectedEvent._id)
    }
  }

  const handleUnregister = (selectedEvent: IUserEvent) => async () => {
    const isWaitlisted = isUserWaitlisted(selectedEvent)

    updateEvent(selectedEvent, isWaitlisted)
    toggleModal(modals.UNREGISTER_EVENT)
    Toast.show({
      type: "success",
      text1: isWaitlisted ? "Waitlist Left!" : "Unregistered!"
    })

    if (user?._id) {
      await usersApi.unregisterEvent(user._id, selectedEvent._id)
    }
  }

  const formatSeatsLeft = (seatsLeft: number) => {
    if (seatsLeft === 1) {
      return "1 seat left"
    }

    return `${seatsLeft > 0 ? seatsLeft : "No"} seats left`
  }

  useEffect(() => {
    fetchEvents()
  }, [user])

  return (
    <SC.EventsPageLayout title="Events" color="background">
      <FlatList
        data={events}
        keyExtractor={(_, i) => `#${i}`}
        ListHeaderComponent={<SC.Title>Events</SC.Title>}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const event = item as IUserEvent
          const noSeatsLeft = event.seatsLeft === 0

          return (
            <SC.EventWrapper>
              <SC.EventTitle>{event.name}</SC.EventTitle>
              <SC.ContentWrapper>
                <SC.Column>
                  {event.image && event.image.length > 0 && (
                    <SC.Image source={{ uri: event.image }} />
                  )}
                  {(!event.image || event.image.length <= 0) && (
                    <SC.Image source={require("../../assets/event.jpg")} />
                  )}
                  <SC.DetailsWrapper>
                    <SC.LocationWrapper>
                      <SC.Marker name="location-pin" size={20} color="black" />
                      <SC.Location>
                        {event.online ? "Online" : event.location}
                      </SC.Location>
                    </SC.LocationWrapper>
                    <SC.Time>{formatDate(event.date)}</SC.Time>
                    <SC.Time>
                      {event.startTime}-{event.endTime} PM
                    </SC.Time>
                  </SC.DetailsWrapper>
                </SC.Column>
                <SC.Column>
                  <SC.Subtitle>{event.description}</SC.Subtitle>
                </SC.Column>
              </SC.ContentWrapper>
              <Text>{formatSeatsLeft(event.seatsLeft)}</Text>
              {noSeatsLeft ? (
                <SC.WaitlistButton
                  title={event.registered ? "Leave Waitlist" : "Join Waitlist"}
                  color="medium"
                  onPress={handleSelect(event)}
                />
              ) : (
                <SC.RegisterButton
                  title={event.registered ? "Unregister" : "Register"}
                  color="medium"
                  onPress={handleSelect(event)}
                />
              )}
              <ModalLayout name={modals.REGISTER_EVENT}>
                <SC.RegisterWrapper color="foreground">
                  <SC.EventTitle>One more thing</SC.EventTitle>
                  <SC.Cross onPress={handleSelect(event)} />
                  <SC.Comments
                    multiline
                    placeholder="Need accomodations? Let us know here!"
                  />
                  <SC.ConfirmButton
                    title="Confirm"
                    color="link"
                    onPress={handleRegister(event)}
                  />
                </SC.RegisterWrapper>
              </ModalLayout>
              <ModalLayout name={modals.UNREGISTER_EVENT}>
                <SC.UnregisterWrapper color="foreground">
                  <SC.EventTitle>Are you sure?</SC.EventTitle>
                  <SC.Cross onPress={handleSelect(event)} />
                  <SC.UnregisterText>
                    You will lose your spot on the{" "}
                    {noSeatsLeft ? "waitlist" : "guest list"}.
                  </SC.UnregisterText>
                  <SC.ConfirmButton
                    title="Confirm"
                    color="red"
                    onPress={handleUnregister(event)}
                  />
                </SC.UnregisterWrapper>
              </ModalLayout>
            </SC.EventWrapper>
          )
        }}
      />
    </SC.EventsPageLayout>
  )
}

export default EventsPage
