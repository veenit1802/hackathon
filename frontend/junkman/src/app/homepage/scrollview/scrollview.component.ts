import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollview',
  templateUrl: './scrollview.component.html',
  styleUrls: ['./scrollview.component.css']
})
export class ScrollviewComponent implements OnInit {

  public items: any[] = [
    { title: 'Flower', url: 'https://bit.ly/2cJjYuB' },
    { title: 'Mountain', url: 'https://bit.ly/2cTBNaL' },
    { title: 'Sky', url: 'https://bit.ly/2cJl3Cx' }
];
public width = '100%';
public height = '400px';
public arrows = true;

  constructor() { }

  ngOnInit(): void {
  }

}
