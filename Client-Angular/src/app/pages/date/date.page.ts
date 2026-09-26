import { Component } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente de visualización de la fecha actual.
 *
 * Muestra la fecha del sistema en un badge informativo.
 */
@Component({
  selector: 'app-date.page',
  imports: [BadgeAtom],
  templateUrl: './date.page.html',
})
export class DatePage {

  /**
   * Obtiene la fecha actual del sistema
   */
  currentDate = new Date();

}
