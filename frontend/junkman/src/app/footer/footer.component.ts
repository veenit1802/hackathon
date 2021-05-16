import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];


  constructor() { }

  ngOnInit(): void {
  }

}
