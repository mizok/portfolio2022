import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { ContactService, PopupService } from '@services';
import { MessagePopupComponent } from '@components/popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('alert') alertTemplateRef!: TemplateRef<any>;
  @Input() title = `I'd Love To Hear From You.`;
  @Input() formGuide = {
    name: {
      title: 'Your Name*',
      error: 'Please Input Your Name'
    },
    email: {
      title: 'Email*',
      error1: 'Please Input Your Email',
      error2: 'Invaid format of email'
    },
    subject: {
      title: 'Subject*',
      error: 'Please Input Your Subject'
    },
    message: {
      title: 'Please Input Your Message'
    }
  }
  @Input() formSubmitError = `There are missing or invalid parts in the form you submitted.<br>Please fix them before resend.`;
  @Input() formSubmitMessage = `Thank you for your reply, you will receive a confirmation reply in your mailbox within 5 minutes.`;
  targetForm!: FormGroup;
  fc = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private popupService: PopupService,
    private viewContainerRef: ViewContainerRef
  ) { }

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
      message: [
        ''
      ]
    });
  }

  submit(e: SubmitEvent) {
    e.preventDefault();
    const form = (e.target as HTMLFormElement);
    if (this.targetForm.invalid) {
      const messagePopupData = {
        message: this.formSubmitError
      }
      this.popupService.open(MessagePopupComponent, this.viewContainerRef, { data: messagePopupData });
      return;
    };
    this.contactService.doPost(form).subscribe({
      complete: () => {
        const messagePopupData = {
          message: this.formSubmitMessage
        }
        this.popupService.open(MessagePopupComponent, this.viewContainerRef, { data: messagePopupData })
        form.reset();
      }
    });
  }

  get form(): { [key: string]: AbstractControl; } {
    return this.targetForm.controls;
  }

}
