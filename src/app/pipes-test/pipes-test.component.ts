import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {
  texto:string="La vida es un Carnaval";
  multa:number=3500;
  ganancia:number=0.34;
  fechaNac:Date=new Date('12-23-2005');
  texto:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque velit sapiente accusantium facere in quam repellendus. Sit eius, quod, exercitationem quam quaerat praesentium consectetur mollitia ab ullam explicabo, dolor et?";
  constructor() { }

  ngOnInit(): void {
  }

}
