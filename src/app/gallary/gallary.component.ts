import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  numbers = [];
  constructor() { 
    for (let i = 1; i < 11; i++) {
      this.numbers.push(i);  
    }
    console.log(this.numbers);
  }

  ngOnInit() {
  }

}
