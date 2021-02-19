import { Dispatch } from 'react'

// import { LocaleModel } from '@models/localeModel'
// import { ThemeModel } from '@models/themeModel'
// import { ILoginFormDataModel } from '@models/loginFormDataModel'
// import { IMessageItemModel } from '@models/messagesModel'
// import { IRegisterFormDataModel } from '@models/registerFormDataModel'
// import { IRecoveryFormDataModel } from '@models/recoveryFormDataModel'
// import { AuthFormTypesModel } from '@models/authFormTypesModel'
// import { IRepresentation, IGeneration } from '@src/models/ExplorerAssetReportModels'
// import { IExplorerTreeDataModel } from '@src/models/ExplorerTreeModel'
// import { IDublunCoreMetadataDTM } from '@src/models/dtm/DublinCoreMetadataDtm'
// import { IModsMetadataDTM } from '@models/dtm/ModsMetadataDtm'
// import { IInformationObjectDTM } from '@models/dtm/InformationObjectDTM'
// import { entityTypes } from '@models/preservicaApiContracts/contentModels'


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
