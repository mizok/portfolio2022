import { Injectable } from '@angular/core';
import {
  fromFetch
} from 'rxjs/fetch';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  doPost(form: HTMLFormElement) {
    const action = form.action;
    const formData = new FormData(form);
    const object: { [key: string]: any } = {};
    formData.forEach((value, key) => object[key] = value);
    const jsonStr = JSON.stringify(object);
    return fromFetch(action,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonStr,
      }
    )
  }
}
