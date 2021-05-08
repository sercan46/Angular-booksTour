import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  curDate=new Date();

  ngOnInit(): void {
  }
  goScrollTo(){
    window.scroll(0, 0);

  }
}
