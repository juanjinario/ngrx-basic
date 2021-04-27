import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  count: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.count = this.count * 2;
  }

  divide() {
    this.count = this.count / 2;
  }

}
