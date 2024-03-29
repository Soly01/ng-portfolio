import { Component, ViewEncapsulation } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ContactService } from '../../../services/contact.service';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  contact: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}
  onSubmit() {
    const formData = this.contact.value;
    this.contactService.sendMessage(formData).subscribe({
      next: (res) => {
        console.log('Success', res);
        this.contact.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Sent Successfully',
        });
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
