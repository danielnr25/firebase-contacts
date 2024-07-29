import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-card-contact',
  template: `
  <div class="border border-gray-500/50 rounded-md p-4 flex flex-row gap-x-4">
    <div class="flex-1">
      <h4 class="text-blue-900 mb-2 font-bold">Daniel Nuñez Rodas</h4>
      <small class="text-yellow-500 mb-2">960508394</small>
      <p class="text-gray-500 mb-2">danielmail.com</p>
      <p class="text-gray-800 text-sm">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum sint quae sit provident atque minus possimus vel! Non ipsa autem praesentium. Dolorem tenetur modi magnam error ipsum nisi alias.
      </p>
    </div>
    <div>
    <app-menu/>
    </div>
  </div>
`,
  standalone: true,
  imports: [MenuComponent],
})
export class CardContactComponent {

}
