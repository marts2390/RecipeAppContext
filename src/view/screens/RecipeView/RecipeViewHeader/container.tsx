import React, { FC } from 'react'
import { useStore } from 'data'

import RecipeViewHeaderComponent from './component'


const RecipeViewHeaderContainer:FC = () => {
  const { RecipeScreenStore: { recipeData, isLoading } } = useStore()

  return (
    <RecipeViewHeaderComponent
      backgroundImage={ recipeData?.strMealThumb }
      title={ recipeData?.strMeal }
      category={ recipeData?.strCategory }
      area={ recipeData?.strArea }
      videoLink={ recipeData?.strYoutube }
      isLoading={ isLoading }
    />
  )
}

export default RecipeViewHeaderContainer
