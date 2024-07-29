import { Component } from '@angular/core';
import { IconSettings } from '../../../shared/ui/icons/setting';
import { IconEdit } from '../../../shared/ui/icons/edit';
import { IconDelete } from '../../../shared/ui/icons/delete';
@Component({
  selector: 'app-menu',
  template: `
    <button class="relative" type="button" (click)="openMenu()">
      <app-icon-settings />

      @if (isOpen) {
        <!-- Dropdown menu -->
        <div
          class="z-10 absolute right-0 top-7 p-1 min-w-24 bg-black rounded-md border border-gray-500/50 shadow overflow-hidden"
        >
          <ul
            class="text-sm text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li class="mb-1">
              <button
                class="w-full flex flex-row gap-x-2 items-center p-1 text-xs rounded-sm hover:bg-zinc-900"
             
              >
                <app-icon-edit /> Edit
              </button>
            </li>
            <li>
              <button

                class="w-full flex flex-row gap-x-2 items-center p-1 text-xs rounded-sm hover:bg-zinc-900"
              >
                <app-icon-delete /> Delete
              </button>
            </li>
          </ul>
        </div>
      }
    </button>
  `,
  standalone: true,
  imports: [IconSettings, IconDelete, IconEdit],
})
export class MenuComponent {
  isOpen = false;
  openMenu(){
    this.isOpen = !this.isOpen; // esto es lo mismo que decir this.isOpen = true, el this hace referencia a la clase MenuComponent y el isOpen es una propiedad de la clase MenuComponent que se inicializa en false. Que significa this en este caso? this hace referencia a la clase MenuComponent. Que significa isOpen en este caso? isOpen es una propiedad de la clase MenuComponent que se inicializa en false.
  }

}
