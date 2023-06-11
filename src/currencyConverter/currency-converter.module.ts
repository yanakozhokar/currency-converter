import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyConverterComponent } from './currency-converter.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CurrencyConverterComponent
  ]
})
    
export class CurrencyConverterModule { }
