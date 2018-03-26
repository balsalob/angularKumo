import { Component, OnInit } from '@angular/core';
import { IlustracionesService } from '../../services/ilustraciones.service';
import { Ilustration } from '../../services/ilustration';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  imagenes: Array<Ilustration>;

  constructor(private _ilustracionesService: IlustracionesService) { }

  ngOnInit() {
    this.imagenes = this._ilustracionesService.getIlustraciones();
  }

}
