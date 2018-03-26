import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  fondo: number;

  constructor() { }

  ngOnInit() {
    this.fondo = Math.random() * 5;
    this.fondo = Math.trunc(this.fondo);
  }
}
