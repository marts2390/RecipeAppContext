import React, { FC } from 'react'
import { useStore } from 'data'

import RecipeViewIngredientsComponent from './component'

const RecipeViewIngredientsContainer:FC = () => {
  const { RecipeScreenStore: { recipeData, ingredientsList, isLoading } } = useStore()

  return (
    <RecipeViewIngredientsComponent
      ingredientsList={ ingredientsList }
      recipeMethod={ recipeData && recipeData.strInstructions }
      isLoading={ isLoading }
    />
  )
}

export default RecipeViewIngredientsContainer
