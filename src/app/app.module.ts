import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayModule } from './pages/arrays/array.module';
import { FlatMapModule } from './pages/flatmap/flatmap.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArrayModule,
    FlatMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
