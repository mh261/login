import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffect} from './effects/article.effects';
import { ArticleService } from './services/article.service';
import { StoreModule } from '@ngrx/store';
import { ArticleReducer } from 'src/ngrx/reducers/article.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([
      ArticleEffect
    ]),
    StoreModule.forRoot({
      article : ArticleReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
