import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, isAscending: boolean): any {
    return [...array].sort((a, b) => this.compare(a, b, field, isAscending));
  }

  compare(a: any, b: any, field: string, isAscending: boolean) {
    const fields = field.split('.');
    let valueA = a;
    let valueB = b;

    for (const currentField of fields) {
      valueA = valueA[currentField];
      valueB = valueB[currentField];
    }

    if (valueA < valueB) {
      return isAscending ? -1 : 1;
    }
    if (valueA > valueB) {
      return isAscending ? 1 : -1;
    }
    return 0;
  }
}


