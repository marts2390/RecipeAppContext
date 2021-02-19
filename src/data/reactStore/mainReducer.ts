/*
 * (c) Copyright 2020 Preservica
 *  All rights reserved.
 *
 *  Developed By:
 *  Preservica
 *  32 The Quadrant
 *  Abingdon Science Park
 *  Abingdon
 *  OX14 3YS
 *
 *  email: info@preservica.com
 *  web: www.preservica.com
 */

import React from 'react'

import {
  IStoreFragment as IHomeScreenFragment,
  initialState as homeScreenStoreInitialState,
  reducer as homeScreenStoreReducer,
} from './HomeScreenStore/reducers'
import { TActions as THomeScreenStoreActions } from './HomeScreenStore/actions'

import {
  IStoreFragment as IRecipeScreenFragment,
  initialState as recipeScreenStoreInitialState,
  reducer as recipeScreenStoreReducer,
} from './RecipeScreenStore/reducers'
import { TActions as TRecipeScreenStoreActions } from './RecipeScreenStore/actions'

export interface IStore {
  HomeScreenStore: IHomeScreenFragment;
  RecipeScreenStore: IRecipeScreenFragment;
}

export type TActions = THomeScreenStoreActions & TRecipeScreenStoreActions

export const initialState: IStore = {
  HomeScreenStore: homeScreenStoreInitialState,
  RecipeScreenStore: recipeScreenStoreInitialState,
}

export const mainReducer: React.Reducer<IStore, TActions> = ({
  HomeScreenStore,
  RecipeScreenStore,
},
action) => ({
  HomeScreenStore: homeScreenStoreReducer(HomeScreenStore, action),
  RecipeScreenStore: recipeScreenStoreReducer(RecipeScreenStore, action),
})
