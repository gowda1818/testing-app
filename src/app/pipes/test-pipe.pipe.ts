import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  standalone: true
})
export class TestPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (null !==value && !isNaN(value)) {
      return value * value;
    }else{
      return 'not a number';
    }
  }

}
