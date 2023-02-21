import {ArticleModels} from "../../app/models/article.models"

export interface ArticleState{
     article: ArticleModels[],
     isSuccess: boolean,
     loading: boolean,
     error: string,
     
}
