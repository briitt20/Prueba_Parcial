import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componente/header/header';
import { Footer } from './componente/footer/footer';
import { Inicio } from './componente/inicio/inicio';
import { Facultades } from './componente/facultades/facultades';
import { Estudiantes } from './componente/estudiantes/estudiantes';

@Component({
  imports: [RouterOutlet, Header, Inicio , Facultades, Estudiantes,Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app_parcial');
}
