import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardimage',
  templateUrl: './cardimage.component.html',
  styleUrls: ['./cardimage.component.css']
})

export class CardimageComponent implements OnInit {

  constructor() { }
  public arrows = true;
  public width: string = "100%";
  public height: string = "170px";
  public visibility1:string="visible";
  public visitruth:boolean=true;
  public visibility2:string="hidden";
  public visitruth1:boolean=false;
  @Input() value:any;
  ngOnInit(): void {
  }

  check()
  {
    if(this.visitruth)
    {
      var data=document.getElementsByClassName('imagecollection');
      console.log( (data[this.value].scrollWidth-data[this.value].clientWidth), data[this.value].scrollLeft);

      if(data[this.value].scrollWidth-data[this.value].clientWidth==data[this.value].scrollLeft)
      {
        console.log("hello");
        this.visibility1="hidden";
        this.visitruth=false;
      }
      else
      {
        this.visitruth1=true;
        this.visibility2="visible";
        data[this.value].scrollLeft+=2*99;
      }
    }
  }

  check2()
  {
      var data=document.getElementsByClassName('imagecollection');
      if(this.visitruth1)
      {
        if(data[this.value].scrollLeft===0)
        {
          console.log("hello");
          this.visibility2="hidden";
          this.visitruth1=false;
        }
        else
        {
          this.visitruth=true;
          this.visibility1="visible"
          data[this.value].scrollLeft-=2*99;
        }
      }
  }

}
