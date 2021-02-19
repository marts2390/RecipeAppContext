import React, { FC } from 'react'
import { useStore, useDispatch } from 'data'
import actions from 'actions'

import HomeComponent from './component'

const HomeContainer:FC = () => {
  const { HomeScreenStore: { categories, meals } } = useStore()
  const dispatch = useDispatch()

  return (
    <HomeComponent
      categories={ categories }
      meals={ meals }
      getRecipesByCategory={ actions.HomeScreenService.getRecipesByCategory(dispatch) }
    />
  )
}

export default HomeContainer
