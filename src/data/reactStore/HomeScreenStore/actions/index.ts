import {
  emptyActionCreator, IEmptyAction, actionCreator, IAction
} from 'data/reactStore/actionTypes'

import { ICategoriesDataModel } from 'models/categoriesDataModel'
import { IMealsDataModel } from 'models/mealsDataModel'

export enum ActionTypes {
  showAppLoader = 'AppScreenStore/showAppLoader',
  hideAppLoader = 'AppScreenStore/hideAppLoader',
  showListLoader = 'AppScreenStore/showListLoader',
  hideListLoader = 'AppScreenStore/hideListLoader',
  initialLoad = 'AppScreenStore/initialLoad',
  getCategoryMeals = 'AppScreenStore/getCategoryMeals'
}

export type TShowAppLoaderAction = IEmptyAction<ActionTypes.showAppLoader>
export type TShowAppLoaderActionCreator = () => TShowAppLoaderAction
export const showAppLoaderActionCreator:
TShowAppLoaderActionCreator = () => emptyActionCreator(ActionTypes.showAppLoader)

export type THideAppLoaderAction = IEmptyAction<ActionTypes.hideAppLoader>
export type THideAppLoaderActionCreator = () => THideAppLoaderAction
export const hideAppLoaderActionCreator:
THideAppLoaderActionCreator = () => emptyActionCreator(ActionTypes.hideAppLoader)

export type TShowListLoaderAction = IEmptyAction<ActionTypes.showListLoader>
export type TShowListLoaderActionCreator = () => TShowListLoaderAction
export const showListLoaderActionCreator:
TShowListLoaderActionCreator = () => emptyActionCreator(ActionTypes.showListLoader)

export type THideListLoaderAction = IEmptyAction<ActionTypes.hideListLoader>
export type THideListLoaderActionCreator = () => THideListLoaderAction
export const hideListLoaderActionCreator:
THideListLoaderActionCreator = () => emptyActionCreator(ActionTypes.hideListLoader)

export interface IinitialLoadPayload {
  categories: ICategoriesDataModel[];
  meals: IMealsDataModel[];
}
export type TInitialLoadAction = IAction<ActionTypes.initialLoad, IinitialLoadPayload>
export type TInitialLoadActionCreator = (payload: IinitialLoadPayload) => TInitialLoadAction
export const initialLoadActionCreator:
TInitialLoadActionCreator = (payload: IinitialLoadPayload) => actionCreator(ActionTypes.initialLoad, payload)

export interface ICategoryMealsDataPayload {
  meals: IMealsDataModel[];
}
export type IgetCategoryMealsAction = IAction<ActionTypes.getCategoryMeals, ICategoryMealsDataPayload>
export type TgetCategoryMealsCreator = (payload: ICategoryMealsDataPayload) => IgetCategoryMealsAction
export const getCategoryMealsCreator:
TgetCategoryMealsCreator = (payload: ICategoryMealsDataPayload) => actionCreator(ActionTypes.getCategoryMeals, payload)


export type TActions =
TShowAppLoaderAction | THideAppLoaderAction | TInitialLoadAction | IgetCategoryMealsAction |
TShowListLoaderAction | THideListLoaderAction
