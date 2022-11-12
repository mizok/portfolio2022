import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTwComponent, MainEnComponent } from '../components/main'

const routes: Routes = [
  { path: 'zh-tw', component: MainTwComponent },
  { path: 'en', component: MainEnComponent },
  { path: '', component: MainEnComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



