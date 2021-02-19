import React, { FC } from 'react'
import actions from 'actions'
import { useStore, useDispatch } from 'data'
import AppComponent from './component'

const AppContainer:FC = () => {
  const { HomeScreenStore: { isLoading } } = useStore()
  const dispatch = useDispatch()

  return (
    <AppComponent
      isLoading={ isLoading }
      initLoad={ actions.HomeScreenService.getCategories(dispatch) }
    />
  )
}
export const container = AppContainer
