import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import {
  fromFetch
} from 'rxjs/fetch';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  targetForm!: FormGroup;
  fc = new FormControl();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm() {
    this.targetForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
        ])
      ],
      subject: [
        '',
        Validators.required
      ],
    });
  }

  submit(e: SubmitEvent) {
    const form = (e.target as HTMLFormElement);
    const action = form.action;
    e.preventDefault();
    const data = new FormData(form);
    // 
    fromFetch(action,
      {
        redirect: "follow",
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message')
        })
      }
    ).subscribe({
      complete: () => console.log('done')
    });

  }

  get form(): { [key: string]: AbstractControl; } {
    return this.targetForm.controls;
  }

}
