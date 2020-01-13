import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterContentInit {
  data = [];
  chart = [];
  month = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];

  url = 'https://storage.googleapis.com/studio-assets/resources/noncachedchart.json';
  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit() {
     this.http.get(this.url).subscribe((res) => {
    const val = res['series'][0].values;
          this.data.push(val);
    this.chart = new Chart('canvas', {
    type: 'line',
    data: {
      labels: this.month,
      datasets: [
        {
          data: this.data[0],
          borderColor: '#5C6AC9',
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });
  });
  }
 ngAfterContentInit() {
 
 }

}
