import { Dispatch } from 'react'

export interface IActions {
  HomeScreenService: IHomeScreenService;
  RecipeScreenService: IRecipeScreenService;
}

export interface IHomeScreenService {
  showLoader: (dispatch: Dispatch<any>) => () => void;
  hideLoader: (dispatch: Dispatch<any>) => () => void;
}

export interface IRecipeScreenService {
  showLoader: (dispatch: Dispatch<any>) => () => void;
  hideLoader: (dispatch: Dispatch<any>) => () => void;
  getRecipeData: (dispatch: Dispatch<any>) => (id: string) => void;
}
