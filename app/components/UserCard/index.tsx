import React, { FC } from "react"

import * as SC from "./styles"
import { IEvent, IUser } from "../../types"
import usersApi from "../../api/users"
import eventsApi from "../../api/events"

interface IUserCardProps {
  user: IUser
  waitlisted?: boolean
  setWaitlistedUsers: (setter: (users: IUser[]) => IUser[]) => void
  setRegisteredUsers: (setter: (users: IUser[]) => IUser[]) => void
  event: IEvent
}

const UserCard: FC<IUserCardProps> = ({
  user,
  waitlisted = false,
  setWaitlistedUsers,
  setRegisteredUsers,
  event
}) => {
  const handleSwitch = async () => {
    if (waitlisted) {
      setWaitlistedUsers((waitlistedUsers: IUser[]) =>
        waitlistedUsers.filter((current: IUser) => current._id !== user._id)
      )
      setRegisteredUsers((registeredUsers: IUser[]) => [
        ...registeredUsers,
        user
      ])
    } else {
      setRegisteredUsers((registeredUsers: IUser[]) =>
        registeredUsers.filter((current: IUser) => current._id !== user._id)
      )
      setWaitlistedUsers((waitlistedUsers: IUser[]) => [
        ...waitlistedUsers,
        user
      ])
    }

    if (event) {
      await usersApi.flipStatus(user._id, event._id, waitlisted)
    }
  }

  const handleDelete = async () => {
    if (waitlisted) {
      setWaitlistedUsers((waitlistedUsers: IUser[]) =>
        waitlistedUsers.filter((current: IUser) => current._id !== user._id)
      )
    } else {
      setRegisteredUsers((registeredUsers: IUser[]) =>
        registeredUsers.filter((current: IUser) => current._id !== user._id)
      )
    }

    if (event) {
      await usersApi.unregisterEvent(user._id, event._id)
    }
  }

  return (
    <SC.CardWrapper>
      <SC.UserText>
        {user.firstName} {user.lastName}
      </SC.UserText>
      <SC.ButtonWrapper>
        <SC.ActionButton color="background" onPress={handleSwitch}>
          <SC.Icon name="account-switch" size={24} color="white" />
        </SC.ActionButton>
        <SC.ActionButton color="background" onPress={handleDelete}>
          <SC.Icon name="trash-can" size={24} color="white" />
        </SC.ActionButton>
      </SC.ButtonWrapper>
    </SC.CardWrapper>
  )
}

export default UserCard
