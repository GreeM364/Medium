import {isDevMode, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from './shared/modules/top-bar/topBar.module'
import {PersistenceService} from './shared/services/persistence.service'
import {Authinterceptor} from './shared/services/authinterceptor'
import {GlobalFeedModule} from './globalFeed/globalFeed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    TopBarModule,
    GlobalFeedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [
    PersistenceService,
    {provide: HTTP_INTERCEPTORS, useClass: Authinterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
