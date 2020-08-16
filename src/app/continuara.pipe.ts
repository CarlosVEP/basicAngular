import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>150){
      value=value.substr(0,150);
    }
    return value+" Continuará ...";
  }

}
