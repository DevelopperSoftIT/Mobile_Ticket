import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Settings provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Settings {

  private theme: BehaviorSubject<String>;

    constructor() {
        // this.theme = new BehaviorSubject('default');
<<<<<<< HEAD
       // this.theme = new BehaviorSubject('default');
=======
>>>>>>> 2d8964445ec24b41a4bbd37f3f4262a20a33c8e0
       this.theme = new BehaviorSubject('moov');
        // this.theme = new BehaviorSubject('default');
    }

    setActiveTheme(val) {
        this.theme.next(val);
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }
}
