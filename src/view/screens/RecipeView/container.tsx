import React, { FC } from 'react'
import { useDispatch, useStore } from 'data'

import { Match } from 'models/reactRouterDomModel'

import actions from 'actions'
import RecipeViewComponent from './component'

interface IRouterProps {
  recipeId: string;
}

interface IRecipeViewContainerProps {
  match: Match<IRouterProps>;
}

const RecipeViewContainer:FC<IRecipeViewContainerProps> = ({ match }) => {
  const { RecipeScreenStore: { isLoading, recipeData } } = useStore()
  const dispatch = useDispatch()
  const { recipeId } = match.params

  return (
    <RecipeViewComponent
      getRecipeData={ actions.RecipeScreenService.getRecipeData(dispatch) }
      resetState={ actions.RecipeScreenService.resetState(dispatch) }
      recipeId={ recipeId }
      isLoading={ isLoading }
      recipeData={ recipeData }
    />
  )
}

export default RecipeViewContainer
