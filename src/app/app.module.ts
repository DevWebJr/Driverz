import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectionComponent } from './components/account/connection/connection.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import {RouterModule} from "@angular/router";
import { RedirectionComponent } from './components/home/redirection/redirection.component';
import { MainComponent } from './layouts/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { QuotationComponent } from './components/quotation/quotation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConnectionComponent,
    CreateAccountComponent,
    RedirectionComponent,
    MainComponent,
    SearchComponent,
    QuotationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
