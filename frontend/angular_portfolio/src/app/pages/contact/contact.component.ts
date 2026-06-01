import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  send() {

    this.contactService.sendMessage(this.form).subscribe({

      next: (response:any) => {

        alert(response.message);

        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

      },

      error: () => {

        alert('Erreur envoi ❌');

      }

    });

  }

}