import {
  emptyActionCreator, IEmptyAction, actionCreator, IAction
} from 'data/reactStore/actionTypes'


export enum ActionTypes {
  showRecipeLoader='RecipeScreenStore/showRecipeLoader',
  hideRecipeLoader='RecipeScreenStore/hideRecipeLoader',
  setRecipeData = 'RecipeScreenStore/setRecipeData',
  resetState = 'RecipeScreenStore/resetState'
}

export type TShowRecipeLoaderAction = IEmptyAction<ActionTypes.showRecipeLoader>
export type TShowRecipeLoaderActionCreator = () => TShowRecipeLoaderAction
export const showRecipeLoaderActionCreator:
TShowRecipeLoaderActionCreator = () => emptyActionCreator(ActionTypes.showRecipeLoader)


export type THideRecipeLoaderAction = IEmptyAction<ActionTypes.hideRecipeLoader>
export type THideRecipeLoaderActionCreator = () => THideRecipeLoaderAction
export const hideRecipeLoaderActionCreator:
THideRecipeLoaderActionCreator = () => emptyActionCreator(ActionTypes.hideRecipeLoader)

export type TResetStateAction = IEmptyAction<ActionTypes.resetState>
export type TResetStateCreator = () => TResetStateAction
export const resetState:
TResetStateCreator = () => emptyActionCreator(ActionTypes.resetState)

export interface ISetRecipeDataPayload {
  ingredientsList: any;
  recipeData: any;
}
export type TSetRecipeDataAction = IAction<ActionTypes.setRecipeData, ISetRecipeDataPayload>
export type TSetRecipeDataCreator = (payload: any) => TSetRecipeDataAction
export const setRecipeData:
TSetRecipeDataCreator = (payload: any) => actionCreator(ActionTypes.setRecipeData, payload)


export type TActions =TShowRecipeLoaderAction | THideRecipeLoaderAction | TResetStateAction | TSetRecipeDataAction
