import React, { FC, useEffect, useState } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import { IUserEvent } from "../../types"
import useAuth from "../../hooks/useAuth"
import usersApi from "../../api/users"
import PageLayout from "../../layouts/PageLayout"
import Text from "../../components/Text"
import Button from "../../components/Button"

const EventsPage: FC = () => {
  const { user } = useAuth()
  const [events, setEvents] = useState<IUserEvent[]>([])

  const fetchEvents = async () => {
    if (!user?._id) return

    const response = await usersApi.getEvents(user._id)

    if (response.ok && response?.data) {
      setEvents(response.data)
    }
  }

  const handleSelect = (eventName: string) => () => {
    setEvents(
      events.map((event: IUserEvent) => {
        if (event.name === eventName)
          return {
            ...event,
            registered: !event.registered
          }

        return event
      })
    )
  }

  useEffect(() => {
    fetchEvents()
  }, [user])

  return (
    <PageLayout title="Events">
      <FlatList
        data={events}
        keyExtractor={(_, i) => `#${i}`}
        renderItem={({ item }) => {
          const event = item as IUserEvent
          return (
            <>
              <Text>{event.name}</Text>
              {/* <SC.RegisterButton
                title={event.registered ? "Unregister" : "Register"}
                color="medium"
                onPress={handleSelect(event.name)}
              /> */}
            </>
          )
        }}
      />
    </PageLayout>
  )
}

export default EventsPage
