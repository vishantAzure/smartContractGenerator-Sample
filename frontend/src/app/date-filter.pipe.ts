import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var abc = new Date(value);
    var str = abc.getDate()+':'+abc.getMonth()+':'+abc.getFullYear();
    return str;
  }

}
