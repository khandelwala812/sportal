import React, { FC, useEffect, useState } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import { IEvent, IUserEvent } from "../../types"
import useAuth from "../../hooks/useAuth"
import useModal from "../../hooks/useModal"
import usersApi from "../../api/users"
import modals from "../../config/modals"
import ModalLayout from "../../layouts/ModalLayout"

const EventsPage: FC = () => {
  const { user } = useAuth()
  const { toggleModal } = useModal()
  const [events, setEvents] = useState<IUserEvent[]>([])

  const fetchEvents = async () => {
    if (!user?._id) return

    const response = await usersApi.getEvents(user._id)

    if (response.ok && response?.data) {
      setEvents(response.data)
    }
  }

  const updateEvent = (selectedEvent: IUserEvent) => {
    setEvents(
      events.map((event: IUserEvent) => {
        if (event._id === selectedEvent._id)
          return {
            ...event,
            registered: !event.registered
          }

        return event
      })
    )
  }

  const handleSelect = (selectedEvent: IUserEvent) => async () => {
    if (!selectedEvent.registered) {
      toggleModal(modals.REGISTER_EVENT)
      return
    }

    toggleModal(modals.UNREGISTER_EVENT)
  }

  const handleRegister = (selectedEvent: IUserEvent) => async () => {
    updateEvent(selectedEvent)
    toggleModal(modals.REGISTER_EVENT)

    if (user?._id) {
      await usersApi.registerEvent(user._id, selectedEvent._id)
    }
  }

  const handleUnregister = (selectedEvent: IUserEvent) => async () => {
    updateEvent(selectedEvent)
    toggleModal(modals.UNREGISTER_EVENT)

    if (user?._id) {
      await usersApi.unregisterEvent(user._id, selectedEvent._id)
    }
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
        renderItem={({ item }) => {
          const event = item as IUserEvent
          return (
            <SC.EventWrapper>
              <SC.EventTitle>{event.name}</SC.EventTitle>
              <SC.ContentWrapper>
                <SC.Column>
                  <SC.Image source={require("../../assets/event.jpg")} />
                  <SC.DetailsWrapper>
                    <SC.LocationWrapper>
                      <SC.Marker name="location-pin" size={20} color="white" />
                      <SC.Location>Chavez Ravine</SC.Location>
                    </SC.LocationWrapper>
                    <SC.Time>April 26, 2022</SC.Time>
                    <SC.Time>4 - 8 PM</SC.Time>
                  </SC.DetailsWrapper>
                </SC.Column>
                <SC.Column>
                  <SC.Subtitle>
                    Join the Dodgers at Chavez Ravine for a chance to make the
                    team while enjoying the fruits of America’s past time!
                  </SC.Subtitle>
                </SC.Column>
              </SC.ContentWrapper>
              <SC.RegisterButton
                title={event.registered ? "Unregister" : "Register"}
                color="translucent"
                onPress={handleSelect(event)}
              />
              <ModalLayout name={modals.REGISTER_EVENT}>
                <SC.RegisterWrapper color="foreground">
                  <SC.EventTitle>One more thing</SC.EventTitle>
                  <SC.Cross color="white" onPress={handleSelect(event)} />
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
                  <SC.Cross color="white" onPress={handleSelect(event)} />
                  <SC.UnregisterText>
                    You will lose your spot on the guest list.
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
