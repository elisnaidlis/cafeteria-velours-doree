import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // constructor (
  //   public name: string,
  //   public email: string,
  //   public phone: number,
  //   public subject: string,
  //   public message: string
  // ) {}

  form: any = {
    name: '',
    email: ''
  };

  submitForm(formContact) {
    console.log(formContact);
  }

}
