import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'details', component:SaveComponent},
  {path:'', component:HomeComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
