import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent {

  public barChart: any;
  public pieChart: any;
  public piechartrating: any;

  private category: any[] = [];
  private count: any[] = [];

  data: any[] = [
    { category: "vehicle", count: 10 },
    { category: "property", count: 10 },
    { category: "electronics", count: 15 },
    { category: "home appliences", count: 20 },
    { category: "furniture and home deco", count: 25 },
    { category: "sports ", count: 25 },
    { category: "animals", count: 15 },
    { category: "other", count: 15 },


  ];

  createArrays(): void {
    for (let i = 0; i < this.data.length; i++) {
      this.category.push(this.data[i].category);
      this.count.push(this.data[i].count);
    }
  }

  createBarChart() {

    this.barChart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.category,
        datasets: [
          {
            label: "Advertisement by category",
            data: this.count,
            backgroundColor: '#9174FF'
          },
        ]
      },
      options: {
        aspectRatio: 0.8
      }

    });
  }

  createPieChart() {
    this.pieChart = new Chart("PieChart", {
      type: 'doughnut',
      data: {
        labels: [
          "reject ad",
          "accept ad"

        ],
        datasets: [{
          label: "AD count",
          data: [300, 450],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',

          ],
          hoverOffset: 5,
          weight: 10
        }]
      }
    })
  }
  createPieChartrating() {
    this.piechartrating = new Chart("PieChartrating", {
      type: 'doughnut',
      data: {
        labels: [
          "0 star",
          "1 star",
          "2 star",
          "3 star",
          "4 star",
          "5 star"
],
        datasets: [{
          label: "user ratings",
          data: [10, 50, 30, 40, 15, 25],
          backgroundColor: [
            'rgb(27, 200, 255)',
            'rgb(252, 255, 110)',
            'rgb(67, 247, 193)',
            'rgb(255, 197, 109)',
            'rgb(145, 116, 255)',
            'rgb(255, 121, 218)',

          ],
          hoverOffset: 10,
          weight: 20
        }]
      }
    })
  }

  ngOnInit(): void {
    this.createArrays();
    this.createBarChart();
    this.createPieChart();
    this.createPieChartrating();
  }


}
