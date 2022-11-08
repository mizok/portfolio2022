import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { ContactService, ModalService } from '@services';
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
    private modalService: ModalService,
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
    if (this.targetForm.invalid) return;
    this.contactService.doPost(form).subscribe({
      complete: () => {
        form.reset();
        this.modalService.alert(this.alertTemplateRef, this.viewContainerRef);

      }
    });

  }

  get form(): { [key: string]: AbstractControl; } {
    return this.targetForm.controls;
  }

}
