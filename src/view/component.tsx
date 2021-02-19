import React, { PureComponent } from 'react'

import AppRouter from 'view/routers/AppRouter'

import LoaderComponent from 'view/components/Loader'

import styles from './View.module.scss'

interface IAppViewProps {
  isLoading: boolean | null;
  initLoad: () => void;
}

class AppComponent extends PureComponent<IAppViewProps> {
  componentDidMount() {
    const { initLoad } = this.props

    initLoad()
  }

  render() {
    const { isLoading } = this.props

    return (
      <div className={ styles.appScreen }>
        {!isLoading ? (
          <AppRouter />
        ) : (
          <div className={ styles.spinnerContainer }>
            <LoaderComponent />
          </div>
        )}
      </div>
    )
  }
}

export default AppComponent
