import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class ReversePipe implements PipeTransform {

  transform(value:any) {
   let result=value-(value*10)/100
    return result;
    
  }

}
