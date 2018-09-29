import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient, private db: AngularFireDatabase) { }
  daysWeather() {

    const urlAPI =
      '/api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
    return this._http.get(urlAPI).map(res => res);
  }

  getCategories() {
    return this.db.list('/list').valueChanges();
  }
  getCategoriesTwo() {
    return this.db.list('/ronaldo').valueChanges();
  }
}
