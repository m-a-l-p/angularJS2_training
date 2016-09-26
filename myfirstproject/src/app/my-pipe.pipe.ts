import { Pipe, PipeTransform } from '@angular/core';


// 20 | my-pipe
//20 years
@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let unit:string = "years"
    
    /*
    console.log(args);
    if (args.lenght > 0) {
      console.log('args: ' +args);
      unit += args;
    } */

    if (value == 1)
      return value + unit;
    else if (value > 1)
      return value + unit;
    else
      return "";
  }

}
