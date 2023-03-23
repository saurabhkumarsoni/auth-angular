import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-piecharts',
  templateUrl: './piecharts.component.html',
  styleUrls: ['./piecharts.component.scss']
})
export class PiechartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public pieChartLabels:string[];
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Chrome', 'Safari', 'Firefox','Internet Explorer','Other', 'Mail Sales', 'Mozila' ],
    datasets: [ {
      data: [ 250, 200,150, 100, 90, 80,50 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
