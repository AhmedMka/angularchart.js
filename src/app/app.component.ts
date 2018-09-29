import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from './weather.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'applicationChart';
  barChart = [];
  barCharttwo = [];
  showSpinner = true;
  constructor(private _weather: WeatherService) {}
  ngOnInit() {
     this._weather.getCategories()
    .subscribe(res => {
      const temp_min = res;
      this.barChart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: ['Assists', 'Goals', 'Matches', 'Trophie'],
          datasets: [{
            label: 'Statistics Messi',
            data: temp_min,
            backgroundColor: [
              'rgb(255, 0, 54)',
              'rgba(54,162,235)',
              'rgba(255,206,86)',
              'rgba(75,192,192)',
            ],
         }
        ]
        },
        options: {
          title: {
            display: true
          }
        }
      });
      this.showSpinner = false;
    });
    this._weather.getCategoriesTwo()
    .subscribe(res => {
      const temp_min = res;
      this.barCharttwo = new Chart('barCharttwo', {
        type: 'bar',
        data: {
          labels: ['Assists', 'Goals', 'Matches', 'Trophie'],
          datasets: [{
            label: 'Statistics Ronaldo',
            data: temp_min,
            backgroundColor: [
              'rgb(255, 0, 54)',
              'rgba(54,162,235)',
              'rgba(255,206,86)',
              'rgba(75,192,192)',
            ],
         }
        ]
        },
        options: {
          title: {
            display: true
          },
        }
      });
    });

  }
}
