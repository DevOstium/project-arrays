import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flatmap',
  templateUrl: './flatmap.component.html',
  styleUrls: ['./flatmap.component.css']
})
export class FlatmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {


      const cestas = [
      { id: 1, itens: ['Maça', 'Banana']},
      { id: 2, itens: ['Banana', 'Abacaxi']}
     ];

     cestas.map(x => x.itens) // [Array(2), Array(2)]
    // cestas.flatMap(x => x.itens) // [“Maça”, “Banana”, “Banana”, “Abacaxi”]

  }

}
