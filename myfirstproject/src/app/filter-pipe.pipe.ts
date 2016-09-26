import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    return users.filter((user:User, index:number, arr:User[]) => {
      //each member in user
      //return only YOUNG user 
      return !user.isOld();
      //
    });
  }

}
