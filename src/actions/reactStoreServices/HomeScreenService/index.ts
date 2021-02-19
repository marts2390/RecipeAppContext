
import { Dispatch } from 'react'

import delivery from 'delivery'

import { IHomeScreenService } from 'actions/layerInterface'

import {
  showAppLoaderActionCreator, hideAppLoaderActionCreator, initialLoadActionCreator, getCategoryMealsCreator,
  showListLoaderActionCreator, hideListLoaderActionCreator
} from 'data/reactStore/HomeScreenStore/actions'

class HomeScreenService implements IHomeScreenService {
  private defaultCategory = 'Beef'

  showLoader = (dispatch: Dispatch<any>) => () => {
    dispatch(showAppLoaderActionCreator())
  }

  hideLoader = (dispatch: Dispatch<any>) => () => {
    dispatch(hideAppLoaderActionCreator())
  }

  getCategories = (dispatch: Dispatch<any>) => async () => {
    dispatch(showAppLoaderActionCreator())
    const getCategories = await delivery.MealAPI.getCategories()
    const getMeals = await delivery.MealAPI.getRecipesByCategory(this.defaultCategory)

    if (getCategories.error) {
      console.warn('Request Failed')

      return
    }

    if (getCategories.value && getMeals.value) {
      const initLoadData = {
        categories: getCategories.value.categories,
        meals: getMeals.value.meals,
      }

      dispatch(initialLoadActionCreator(initLoadData))
    }
  }

  getRecipesByCategory = (dispatch: Dispatch<any>) => async (category: string) => {
    dispatch(showListLoaderActionCreator())
    const { value, error } = await delivery.MealAPI.getRecipesByCategory(category)

    if (error) {
      console.warn('Request Failed')

      return
    }

    if (value) {
      dispatch(getCategoryMealsCreator(value))
    }
  }
}

export default new HomeScreenService()
