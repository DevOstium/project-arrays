import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FlatMapModule } from './flatmap.module';

@Component({
  selector: 'app-flatmap',
  templateUrl: './flatmap.component.html',
  styleUrls: ['./flatmap.component.css']
})
export class FlatmapComponent implements OnInit {

  produto = new Subject<string[]>();

   a = new Set([1,2,3]);
     b = new Set([4,3,2]);
  
  constructor() { }

  ngOnInit() {



      this.produto.next();


      const cestas = [
      { id: 1, itens: ['Maça', 'Banana']},
      { id: 2, itens: ['Banana', 'Abacaxi']}
     ];

     cestas.map(x => x.itens) // [Array(2), Array(2)]
    // cestas.flatMap(x => x.itens) // [“Maça”, “Banana”, “Banana”, “Abacaxi”]


    var obj1 = { a: 1 };
    var obj2 = { b: 2 };
    var obj3 = { b: 1 };
    
    var merged = Object.assign(obj1, obj2, obj3);
    
    //console.log(merged); // { a: 1, b: 2 }



    
    let  set1 = new Set(['a', 'b']);
    const set2 = new Set(['b', 'c']);
    //const intersection = new Set([...set1].filter(x => set2.has(x)));


    

  }

}
