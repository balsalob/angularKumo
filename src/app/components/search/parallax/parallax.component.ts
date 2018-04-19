import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: []
})
export class ParallaxComponent implements OnInit {

  @Input() titulo: string;
  @Input() imagen: string;

  constructor() { }

  ngOnInit() {
  }

}
