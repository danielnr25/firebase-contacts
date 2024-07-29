import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconPlus } from '../../../shared/ui/icons/plus';
@Component({
  selector: 'app-search-bar',
  template: `<div class="flex items-center gap-x-4">
    <input
        type="text"
        placeholder="Busqueda de contactos"
        class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
        [formControl]="control"
      />
      <a href=""
         class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
      >
      <app-icon-plus class="size-4" />
        Nuevo contacto
      </a>
  </div>`,
  standalone: true,
  imports: [IconPlus, ReactiveFormsModule], // Importamos el módulo ReactiveFormsModule para poder usar el FormControl. También importamos el IconPlus. Este import se hace de la misma manera que en el componente NavbarComponent.
})
export class SearchBarComponent {

  control = new FormControl(''); // FormControl es una clase que nos permite manejar formularios reactivos en Angular de una manera más sencilla.

}
