import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../services/evento';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: []
})
export class EventComponent implements OnInit {

  eventos: Array<Evento>;
  ocultar: number;

  constructor(private _eventosService: EventosService) {}

  ngOnInit() {
    this.eventos = this._eventosService.getEventos();
    console.log(this.eventos);
    this.ocultar = this.eventos.length - 1;
  }

}
