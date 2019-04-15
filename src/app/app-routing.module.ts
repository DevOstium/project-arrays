import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraysComponent } from './pages/arrays/arrays.component';

const routes: Routes = [

    {path: '' , pathMatch: 'full', redirectTo : 'array'},
    {path : 'array', component : ArraysComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
