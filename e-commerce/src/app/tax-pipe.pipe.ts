import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxPipe'
})
export class TaxPipePipe implements PipeTransform {

  transform(num:number, tax?: number): any {
    let taxRate: number = 7;
    let totalTax: number = 0;

    if (tax >= 0) {
      taxRate = tax;
    }
    if (num && (num > 0) && (taxRate > 0)) {
      totalTax = (num * taxRate / 100);
    }

    return totalTax;
  }
}
