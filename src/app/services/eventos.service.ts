import { Injectable } from '@angular/core';
import { Evento } from './evento';

@Injectable()
export class EventosService {

  private eventos: Array<Evento> = [
    {
      nombre: 'SALÓN DEL MANGA DE VALENCIA',
      url: 'http://www.japanweekend.com/valencia/',
      fecha: '19 Y 20 DE MAYO – FERIA VALENCIA',
      // tslint:disable-next-line:max-line-length
      videoUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.5166279118444!2d-0.43053368475917914!3d39.5028281186344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60456cf398be71%3A0xa41b3b9e8bdd5bc1!2sFeria+Valencia!5e0!3m2!1ses!2ses!4v1520792285631'
    }
  ];

  constructor() { }
  getEventos() {
    return this.eventos;
  }
}
