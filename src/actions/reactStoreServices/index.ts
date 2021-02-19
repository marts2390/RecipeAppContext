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

import { IActions } from 'actions/layerInterface'
import HomeScreenService from 'actions/reactStoreServices/HomeScreenService'
import RecipeScreenService from 'actions/reactStoreServices/RecipeScreenService'


class Actions implements IActions {
  HomeScreenService = HomeScreenService

  RecipeScreenService = RecipeScreenService
}

export default new Actions()
