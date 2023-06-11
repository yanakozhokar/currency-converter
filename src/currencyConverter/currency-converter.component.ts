import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
  
export class CurrencyConverterComponent {
  usdToUah: number = 0;
  eurToUah: number = 0;
  inputCurrency1: number = 0;
  inputCurrency2: number = 0;
  selectedCurrency1: string = '';
  selectedCurrency2: string = '';

  constructor(private http: HttpClient) {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.http.get('https://v6.exchangerate-api.com/v6/6f7886810c1b3a9461678253/latest/UAH').subscribe((data: any) => {
      this.usdToUah = data.conversion_rates.USD;
      this.eurToUah = data.conversion_rates.EUR;
    });
  }

  convertCurrency(converter: number) {
    if (converter === 1) {
      if (this.selectedCurrency1 === 'UAH') {
        this.inputCurrency2 = this.inputCurrency1 * (1 / this.usdToUah);
      } else if (this.selectedCurrency1 === 'USD') {
        this.inputCurrency2 = this.inputCurrency1 * this.usdToUah;
      } else if (this.selectedCurrency1 === 'EUR') {
        this.inputCurrency2 = this.inputCurrency1 * (this.eurToUah / this.usdToUah);
      }
    } else if (converter === 2) {
      if (this.selectedCurrency2 === 'UAH') {
        this.inputCurrency1 = this.inputCurrency2 * (1 / this.usdToUah);
      } else if (this.selectedCurrency2 === 'USD') {
        this.inputCurrency1 = this.inputCurrency2 * this.usdToUah;
      } else if (this.selectedCurrency2 === 'EUR') {
        this.inputCurrency1 = this.inputCurrency2 * (this.eurToUah / this.usdToUah);
      }
    }
  }
}