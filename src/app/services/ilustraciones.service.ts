import { Injectable } from '@angular/core';
import { Ilustration } from './ilustration';

@Injectable()
export class IlustracionesService {

  private imagenes: Array<Ilustration> = [
    {
      id: 1,
      imagenes: ['assets/img/belen-prieto-1.jpg',
      'assets/img/belen-prieto-2.jpg',
      'assets/img/belen-prieto-3.jpg',
      'assets/img/belen-prieto-3 (1).jpg']
    },
    {
      id: 2,
      imagenes: [
        'assets/img/belen-prieto-4.jpg',
        'assets/img/belen-prieto-4 (1).jpg',
        'assets/img/belen-prieto-5.jpg',
        'assets/img/belen-prieto-5 (1).jpg'
      ]
    },
    {
      id: 3,
      imagenes: [
        'assets/img/belen-prieto-5 (2).jpg',
        'assets/img/belen-prieto-6.jpg',
        'assets/img/belen-prieto-7.jpg',
        'assets/img/belen-prieto-8.jpg'
      ]
    },
    {
      id: 4,
      imagenes: [
        'assets/img/belen-prieto-9.jpg',
        'assets/img/belen-prieto-10.jpg',
        'assets/img/belen-prieto-11.jpg',
        'assets/img/belen-prieto-12.jpg'
      ]
    },
    {
      id: 5,
      imagenes: [
        'assets/img/belen-prieto-13.jpg',
        'assets/img/belen-prieto-13 (1).jpg',
        'assets/img/belen-prieto-14.jpg',
        'assets/img/belen-prieto-14 (1).jpg'
      ]
    },
    {
      id: 6,
      imagenes: [
        'assets/img/belen-prieto-15.jpg',
        'assets/img/belen-prieto-16.jpg',
        'assets/img/belen-prieto-17.jpg',
        'assets/img/belen-prieto-chihiro2.jpg'
      ]
    },
    {
      id: 7,
      imagenes: [
        'assets/img/belen-prieto-19.jpg',
        'assets/img/belen-prieto-20.jpg',
        'assets/img/belen-prieto-21.jpg',
        'assets/img/belen-prieto-22.jpg'
      ]
    },
    {
      id: 8,
      imagenes: [
        'assets/img/belen-prieto-23.jpg',
        'assets/img/belen-prieto-24.jpg',
        'assets/img/belen-prieto-aloy2.jpg',
        'assets/img/belen-prieto-anna.jpg'
      ]
    },
    {
      id: 9,
      imagenes: [
        'assets/img/belen-prieto-appafinal.jpg',
        'assets/img/belen-prieto-arya.jpg',
        'assets/img/belen-prieto-auridta.jpg',
        'assets/img/belen-prieto-batgirlfinal.jpg'
      ]
    },
    {
      id: 10,
      imagenes: [
        'assets/img/belen-prieto-blacksadfinal.jpg',
        'assets/img/belen-prieto-castilloambulante.jpg',
        'assets/img/belen-prieto-cersei2.jpg',
        'assets/img/belen-prieto-chicacornuda.jpg'
      ]
    },
    {
      id: 11,
      imagenes: [
        'assets/img/belen-prieto-chihiro2.jpg',
        'assets/img/belen-prieto-como-entrenar-a-tu-dragon.jpg',
        'assets/img/belen-prieto-daenerys.jpg',
        'assets/img/belen-prieto-directo.jpg'
      ]
    },
    {
      id: 12,
      imagenes: [
        'assets/img/belen-prieto-draco.jpg',
        'assets/img/belen-prieto-dragon.jpg',
        'assets/img/belen-prieto-eevee2.jpg',
        'assets/img/belen-prieto-elcaminodelmago.jpg'
      ]
    },
    {
      id: 13,
      imagenes: [
        'assets/img/belen-prieto-elsa.jpg',
        'assets/img/belen-prieto-elsaanna.jpg',
        'assets/img/belen-prieto-zootopia.jpg',
        'assets/img/belen-prieto-evvex.jpg'
      ]
    },
    {
      id: 14,
      imagenes: [
        'assets/img/belen-prieto-gato.jpg',
        'assets/img/belen-prieto-ginny2final.jpg',
        'assets/img/belen-prieto-gotfinal.jpg',
        'assets/img/belen-prieto-hada.jpg'
      ]
    },
    {
      id: 15,
      imagenes: [
        'assets/img/belen-prieto-hagrid.jpg',
        'assets/img/belen-prieto-hermione.jpg',
        'assets/img/belen-prieto-hinata.jpg',
        'assets/img/belen-prieto-horadeaventuras.jpg'
      ]
    },
    {
      id: 16,
      imagenes: [
        'assets/img/belen-prieto-it.jpg',
        'assets/img/belen-prieto-izabel.jpg',
        'assets/img/belen-prieto-izombie.jpg',
        'assets/img/belen-prieto-jackfrost.jpg'
      ]
    },
    {
      id: 17,
      imagenes: [
        'assets/img/belen-prieto-transistor.jpg',
        'assets/img/belen-prieto-katniss2.jpg',
        'assets/img/belen-prieto-kh2.jpg',
        'assets/img/belen-prieto-kvothe.jpg'
      ]
    },
    {
      id: 18,
      imagenes: [
        'assets/img/belen-prieto-lexa.jpg',
        'assets/img/belen-prieto-littlewitchacademiafinal.jpg',
        'assets/img/belen-prieto-lunafinal.jpg',
        'assets/img/belen-prieto-masalladelmuro.jpg'
      ]
    },
    {
      id: 19,
      imagenes: [
        'assets/img/belen-prieto-wonderwoman4.jpg',
        'assets/img/belen-prieto-merida.jpg',
        'assets/img/belen-prieto-merida2.jpg',
        'assets/img/belen-prieto-misguided-ghost.jpg'
      ]
    },
    {
      id: 20,
      imagenes: [
        'assets/img/belen-prieto-missfortune.jpg',
        'assets/img/belen-prieto-moana.jpg',
        'assets/img/belen-prieto-moanaadnlilofinal.jpg',
        'assets/img/belen-prieto-mononoke.jpg'
      ]
    },
    {
      id: 21,
      imagenes: [
        'assets/img/belen-prieto-mononokecuadrada.jpg',
        'assets/img/belen-prieto-mujergato.jpg',
        'assets/img/belen-prieto-villanosimpresion.jpg',
        'assets/img/belen-prieto-naranja.jpg'
      ]
    },
    {
      id: 22,
      imagenes: [
        'assets/img/belen-prieto-widowytracer3.jpg',
        'assets/img/belen-prieto-neville.jpg',
        'assets/img/belen-prieto-newtfinal2.jpg',
        'assets/img/belen-prieto-zeldabotwfinal.jpg'
      ]
    },
    {
      id: 23,
      imagenes: [
        'assets/img/belen-prieto-yourname.jpg',
        'assets/img/belen-prieto-proyecto56.jpg',
        'assets/img/belen-prieto-ragnar.jpg',
        'assets/img/belen-prieto-ramona.jpg'
      ]
    },
    {
      id: 24,
      imagenes: [
        'assets/img/belen-prieto-rapunzel.jpg',
        'assets/img/belen-prieto-rapunzel2.jpg',
        'assets/img/belen-prieto-raro2.jpg',
        'assets/img/belen-prieto-rickandmortyfinal.jpg'
      ]
    },
    {
      id: 25,
      imagenes: [
        'assets/img/belen-prieto-ronaldweasly.jpg',
        'assets/img/belen-prieto-sakura.jpg',
        'assets/img/belen-prieto-sansa2.jpg',
        'assets/img/belen-prieto-scottramonafinal.jpg'
      ]
    },
    {
      id: 26,
      imagenes: [
        'assets/img/belen-prieto-snape2.jpg',
        'assets/img/belen-prieto-sombradvafinal.jpg',
        'assets/img/belen-prieto-str3.jpg',
        'assets/img/belen-prieto-stranger-thingsfinal.jpg'
      ]
    },
    {
      id: 27,
      imagenes: [
        'assets/img/belen-prieto-thor.jpg',
        'assets/img/belen-prieto-tiana.jpg',
        'assets/img/belen-prieto-totoro.jpg',
        'assets/img/belen-prieto-tracerfinal.jpg'
      ]
    },
    {
      id: 28,
      imagenes: [
        'assets/img/belen-prieto-jonsnow.jpg',
        'assets/img/belen-prieto-mundodisco3.jpg',
        'assets/img/belen-prieto-narnia3.jpg',
        'assets/img/belen-prieto-memoriasdeidhun.jpg'
      ]
    },
    {
      id: 29,
      imagenes: [
        'assets/img/belen-prieto-primerahada.jpg',
        'assets/img/belen-prieto-pokemon.jpg',
        'assets/img/belen-prieto-escaladeedades.jpg'
      ]
    }
  ];
    constructor() {}
    getIlustraciones() {
      return this.imagenes;
    }
  }


