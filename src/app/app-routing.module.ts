import { NgModule } from '@angular/core';
import {ConnectionComponent} from "./components/account/connection/connection.component";
import {CreateAccountComponent} from "./components/account/create-account/create-account.component";
import { RouterModule, Routes } from '@angular/router';
import {RedirectionComponent} from "./components/home/redirection/redirection.component";
import {SearchComponent} from "./components/search/search.component";
import {QuotationComponent} from "./components/quotation/quotation.component";

const routes: Routes = [
  {path: "", redirectTo:"redirection", pathMatch:"full"},
  {path: "redirection", component: RedirectionComponent},
  {path: "connection", component: ConnectionComponent},
  {path: "create-account", component: CreateAccountComponent},
  {path: "search", component: SearchComponent},
  {path: "quotation", component: QuotationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
