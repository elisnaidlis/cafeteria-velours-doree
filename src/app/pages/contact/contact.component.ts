import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group ({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]]
    })
  }

  checkField(field: string): string {
    const control = this.formContact.get(field);
    return control && control.invalid && (control.dirty || control.touched) ? 'is-invalid' : '';
  }

  submitForm() {
    if (this.formContact.valid) {
      console.log('Formulário enviado:', this.formContact.value);
    } else {
      console.log('Formulário inválido');
      this.formContact.markAllAsTouched();
    }

    this.formContact.reset();

  }
}


//private http: HttpClient
