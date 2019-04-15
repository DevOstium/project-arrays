import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraysComponent } from './pages/arrays/arrays.component';
import { FlatmapComponent } from './pages/flatmap/flatmap.component';

const routes: Routes = [

    {path: '' , pathMatch: 'full', redirectTo : 'flatmap'},
    {path : 'array', component : ArraysComponent},
    {path : 'flatmap', component : FlatmapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
