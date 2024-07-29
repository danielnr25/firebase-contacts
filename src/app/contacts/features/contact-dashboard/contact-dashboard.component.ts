import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { ContactsService } from '../../data-access/contacts.service';
import { CardContactComponent } from "../../ui/card-contact/card-contact.component";
@Component({
  selector: 'app-contact-dashboard',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto">
      <app-search-bar />
      <section class="grid grid-cols-3 gap-8 mt-8">
      <app-card-contact />
      </section>
    </div>
  `,
  standalone: true,
  imports: [SearchBarComponent, AsyncPipe, CardContactComponent],
})
export default class ContactDashboardComponent {
  private _contactsService = inject(ContactsService);

}
