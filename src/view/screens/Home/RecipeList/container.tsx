import React, { FC } from 'react'
import { useStore } from 'data'
import RecipeListComponent from './component'

const RecipeListContainer:FC = () => {
  const { HomeScreenStore: { meals, isListLoading } } = useStore()

  return (
    <RecipeListComponent
      meals={ meals }
      isListLoading={ isListLoading }
    />
  )
}

export default RecipeListContainer
