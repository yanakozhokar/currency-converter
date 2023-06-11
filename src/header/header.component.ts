import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exchangeRates: { [key: string]: number } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.http.get<any>('https://v6.exchangerate-api.com/v6/6f7886810c1b3a9461678253/latest/UAH')
      .subscribe(data => {
        this.exchangeRates = data.conversion_rates;
        console.log(this.exchangeRates)
      });
  }
}
