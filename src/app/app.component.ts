import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {Observable} from 'rxjs'
import { ArticleState } from 'src/ngrx/states/article.state';
import * as ArticleActions from '../ngrx/actions/article.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login';

  article$: Observable <ArticleState> ;
  constructor(private store: Store <{article: ArticleState}>){
    this.article$ = this.store.select('article');
  }
  ngOnInit(): void {
    this.store.dispatch(ArticleActions.getPerginate({page:1, itemPerPage:5}))
  }


}
