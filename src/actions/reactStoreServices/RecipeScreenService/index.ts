

import { Dispatch } from 'react'

import delivery from 'delivery'

import { IRecipeDataModel } from 'models/recipeDataModel'
import { IRecipeScreenService } from 'actions/layerInterface'

import {
  showRecipeLoaderActionCreator, hideRecipeLoaderActionCreator, setRecipeData, resetState
} from 'data/reactStore/RecipeScreenStore/actions'


class RecipeScreenService implements IRecipeScreenService {
  showLoader = (dispatch: Dispatch<any>) => () => {
    dispatch(showRecipeLoaderActionCreator())
  }

  hideLoader = (dispatch: Dispatch<any>) => () => {
    dispatch(hideRecipeLoaderActionCreator())
  }

  resetState = (dispatch: Dispatch<any>) => () => {
    dispatch(resetState())
  }

  getRecipeData = (dispatch: Dispatch<any>) => async (id: string) => {
    const { value, error } = await delivery.MealAPI.getRecipeData(id)
    this.showLoader(dispatch)

    if (error) {
      console.warn('Request Failed')

      return
    }

    if (value) {
      const ingredientsList: IRecipeDataModel[] = []
      const ingredientsAmounts: string[] = []
      const ingredientsFullList: string[] = []

      const removeEmptyString = Object.fromEntries(
        Object.entries(value.meals[0]).filter(([key, desc]) => desc !== '')
      )

      const removeNullValues = Object.fromEntries(
        Object.entries(removeEmptyString).filter(([key, desc]) => desc !== null)
      )

      // Get all ingredients
      Object.keys(removeNullValues).forEach((item) => {
        if (item.includes('Ingredient')) {
          ingredientsList.push(value.meals[0][item])
        }
      })

      // Get all ingredient measures
      Object.keys(removeNullValues).forEach((item) => {
        if (item && item.includes('Measure')) {
          ingredientsAmounts.push(value.meals[0][item])
        }
      })

      // Remove duplicates values if any
      const removeDuplicates = ingredientsList.filter((item, index) => ingredientsList.indexOf(item) === index)

      // Map ingredients and measures into one string
      removeDuplicates.forEach((item, index) => {
        const string = `${item}: ${ingredientsAmounts[index]}`
        ingredientsFullList.push(string)
      })

      const dataResponse = {
        ingredientsList: ingredientsFullList,
        recipeData: value.meals[0]
      }

      dispatch(setRecipeData(dataResponse))
    }
  }
}

export default new RecipeScreenService()
