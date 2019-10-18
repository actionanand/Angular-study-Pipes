import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'shortenPipe'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any){
        if(value.length > 10){
            return value.substr(0, 10) + '...';
        }else
        return value;
    }
}