import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';

import {reducers} from './store';
import {BreweryService} from './services/brewery.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
