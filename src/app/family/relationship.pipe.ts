import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relationshipValue'
})
export class RelationshipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
