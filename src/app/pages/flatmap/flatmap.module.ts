import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlatmapComponent } from './flatmap.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

    declarations : [FlatmapComponent],
    exports : [FlatmapComponent],
    imports : [CommonModule, HttpClientModule]

})
export class FlatMapModule{}