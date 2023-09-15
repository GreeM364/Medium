import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {EditArticleComponent} from './components/editArticle/editArticle.component'
import {UpdateArticleEffect} from './store/effects/updateArticle.effect'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {reducers} from './store/reducers'
import {EditArticleService} from './services/editArticle.service'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {}
