import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ArraysComponent } from './arrays.component';



@NgModule({

    declarations : [ArraysComponent],
    exports : [ArraysComponent],
    imports : [CommonModule]

})
export class ArrayModule{}