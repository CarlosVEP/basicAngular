import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.css']
})
export class SwitchTestComponent implements OnInit {
  pestania:String="techo";
  constructor() { }

  ngOnInit(): void {
  }

}
