import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  amount1: number = 0;
  currency1: string = 'UAH';
  amount2: number = 0;
  currency2: string = 'USD';
  conversionRates: { [key: string]: number } = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConversionRates();
  }

  getConversionRates() {
    this.http.get<any>('https://v6.exchangerate-api.com/v6/6f7886810c1b3a9461678253/latest/UAH')
      .subscribe(data => {
        this.conversionRates = data.conversion_rates;
        this.convertCurrency(1);
        this.convertCurrency(2);
      });
  }

  convertCurrency(converter: number) {
    if (converter === 1) {
      if (this.currency1 === this.currency2) {
        this.amount2 = this.amount1;
      } else {
        const rate = this.conversionRates[this.currency2] / this.conversionRates[this.currency1];
        this.amount2 = this.amount1 * rate;
      }
    } else {
      if (this.currency2 === this.currency1) {
        this.amount1 = this.amount2;
      } else {
        const rate = this.conversionRates[this.currency1] / this.conversionRates[this.currency2];
        this.amount1 = this.amount2 * rate;
      }
    }
  }
}
