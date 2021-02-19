import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import Loader from 'view/components/Loader'
import RecipeCard from 'view/components/RecipeCard'

import { IMealsDataModel } from 'models/mealsDataModel'

import styles from './RecipeList.module.scss'

interface IHomeComponentProps {
  meals: IMealsDataModel[]
  isListLoading: boolean | null
}

const HomeComponent:FC<IHomeComponentProps> = ({ meals, isListLoading }) => (
  <div className={ styles.recipeList }>
    <Grid
      container
      spacing={ 3 }
    >
      {meals?.map((item) => (
        <Grid
          item
          xs={ 6 }
          sm={ 4 }
          md={ 3 }
          xl={ 2 }
          key={ item.idMeal }
        >
          {!isListLoading ? (
            <RecipeCard item={ item } />
          ) : (
            <div>
              <Skeleton
                variant="rect"
                height={ 200 }
                animation="wave"
              />
              <Skeleton
                variant="text"
                height={ 100 }
              />
            </div>
          )}
        </Grid>
      ))}
    </Grid>
  </div>
)

export default HomeComponent
