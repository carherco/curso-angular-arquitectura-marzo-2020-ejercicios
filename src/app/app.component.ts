import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "accenture";
  nombre = "carlos";
  mostrar = false;

  constructor() {
    setTimeout(() => (this.nombre = "Marta"), 3000);
  }

  cambiarNombreDesdeBoton() {
    this.nombre = "Pedro";
  }

  cambiarNombreDesdeInput(nombre: string) {
    this.nombre = nombre;
  }

  nombreCompleto() {
    return this.nombre + "Perez";
  }
}
