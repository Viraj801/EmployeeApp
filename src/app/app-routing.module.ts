import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {path:"",component:ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
