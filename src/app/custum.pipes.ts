import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phone'})
export class PhoneNumberPipe implements PipeTransform {
  transform(phone: string): string {
    return '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6, 10);
  }
}
