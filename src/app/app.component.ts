import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';


  updateLightPosition(event: MouseEvent): void {
    const light = document.getElementById('light');
    if (light) { // Esta es la comprobación de seguridad
      light.style.left = event.pageX + 'px';
      light.style.top = event.pageY + 'px';
    }
  }

}
