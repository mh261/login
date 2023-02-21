import {createAction, props} from "@ngrx/store"
import {ArticleModels} from "../../app/models/article.models"



export const getPerginate = createAction('[article] Get Perginate', props<{page: number,itemPerPage: number }>() );
export const getSuccess = createAction('[article] Get Succes', props <{article: ArticleModels[]}>());
export const getError = createAction('[article] Get Error', props <{error: string}>());