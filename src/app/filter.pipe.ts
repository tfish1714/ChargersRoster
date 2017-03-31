import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input, filter): any {
    var output = [];
    if (input!==null) {
      if (filter === 'femalePlayers') {
        for (var i=0; i <input.length; i++) {
          if (input[i].gender === 'Female') {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filter === 'malePlayers') {
        for (var i=0; i <input.length; i++) {
          if (input[i].gender === 'Male') {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filter === 'midget'){
        for (var i=0; i <input.length; i++) {
          if (input[i].team === 'Midget') {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filter === 'mM') {
        for (var i=0; i <input.length; i++) {
          if (input[i].team === 'MM') {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (filter === 'jRPW') {
        for (var i=0; i <input.length; i++) {
          if (input[i].team === 'JRPW') {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (filter === 'pW') {
        for (var i=0; i <input.length; i++) {
          if (input[i].team === 'PW') {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (filter === 'cadet') {
        for (var i=0; i <input.length; i++) {
          if (input[i].team === 'Cadet') {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    } else {
      return output;
    }
  }

}
