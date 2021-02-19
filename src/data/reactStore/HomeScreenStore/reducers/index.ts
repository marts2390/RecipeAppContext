import { ICategoriesDataModel } from 'models/categoriesDataModel'
import { IMealsDataModel } from 'models/mealsDataModel'
import { ActionTypes, TActions } from '../actions/index'

export interface IStoreFragment {
  isLoading: boolean | null;
  isListLoading: boolean | null;
  categories: ICategoriesDataModel[];
  meals: IMealsDataModel[];
}

export const initialState: IStoreFragment = {
  isLoading: null,
  isListLoading: null,
  categories: [],
  meals: [],
}

export const reducer = (state: IStoreFragment, action: TActions) => {
  switch (action.type) {
    case ActionTypes.showAppLoader:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.hideAppLoader:
      return {
        ...state,
        isLoading: false,
      }

    case ActionTypes.showListLoader:
      return {
        ...state,
        isListLoading: true,
      }

    case ActionTypes.hideListLoader:
      return {
        ...state,
        isListLoading: false,
      }

    case ActionTypes.initialLoad:
      return {
        ...state,
        categories: action.payload.categories,
        meals: action.payload.meals,
        isLoading: false,
      }

    case ActionTypes.getCategoryMeals:
      return {
        ...state,
        meals: action.payload.meals,
        isListLoading: false,
      }

    default:
      return state
  }
}
