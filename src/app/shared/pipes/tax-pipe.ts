import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'tax'})

//Return number or string?
export class TaxPipe implements PipeTransform {
    
    transform(including: number): string {
        return (including*0.8).toFixed(0);
    }
}
