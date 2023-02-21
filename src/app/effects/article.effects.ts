import { Injectable } from "@angular/core";
import { createEffect, ofType ,Actions} from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleState } from "src/ngrx/states/article.state";
import * as ArticleActions from "../../ngrx/actions/article.actions"
import { ArticleModels } from "../models/article.models";
import { ArticleService } from "../services/article.service";

@Injectable()
export class ArticleEffect{
    constructor(private action$ : Actions, private articleService: ArticleService){
    }

    getArticle$ = createEffect(
    () => this.action$.pipe(
        ofType(ArticleActions.getPerginate),
        switchMap((action) => {
            return this.articleService.getArticle(action.page, action.itemPerPage);
        }),
        map((response) => {
            return ArticleActions.getSuccess({article: <Array<ArticleModels>> response})
        }),
        catchError((error) =>{
            return of( ArticleActions.getError({error: error.message}));
        })
    )
    )
}
