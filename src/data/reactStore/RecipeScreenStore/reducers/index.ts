import { ActionTypes, TActions } from '../actions/index'


export interface IStoreFragment {
  isLoading: boolean | null;
  recipeData: any;
  ingredientsList: any;
}

export const initialState: IStoreFragment = {
  isLoading: null,
  recipeData: null,
  ingredientsList: [],
}

export const reducer = (state: IStoreFragment, action: TActions) => {
  switch (action.type) {
    case ActionTypes.showRecipeLoader:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.hideRecipeLoader:
      return {
        ...state,
        isLoading: false,
      }

    case ActionTypes.resetState:
      return {
        ...initialState,
      }

    case ActionTypes.setRecipeData:
      return {
        ...state,
        isLoading: false,
        recipeData: action.payload.recipeData,
        ingredientsList: action.payload.ingredientsList
      }

    default:
      return state
  }
}
