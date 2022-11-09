import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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
        message: '您送出的表單中有缺漏的部分，煩請確認補填後重新發送。'
      }
      this.popupService.open(MessagePopupComponent, this.viewContainerRef, { data: messagePopupData });
      return;
    };
    this.contactService.doPost(form).subscribe({
      complete: () => {
        const messagePopupData = {
          message: '感謝您的回覆，您將在五分鐘內於您的信箱中收到確認回覆通知。'
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
