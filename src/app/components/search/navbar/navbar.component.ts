import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ocultar() {

    document.getElementById('mobile-demo').style.transform = ' translateX(-100%)';

  }

}
