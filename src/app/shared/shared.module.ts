import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import { RotateDirective } from "./directives/rotate.directive";
import { FilterByNamePipe } from "./pipe/filter-by-name.pipe";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PieComponent } from "./components/pie/pie.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DatepickerComponent,
    RotateDirective,
    FilterByNamePipe,
    HeaderComponent,
    MenuComponent,
    PieComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    DatepickerComponent,
    RotateDirective,
    FilterByNamePipe,
    HeaderComponent,
    MenuComponent,
    PieComponent
  ]
})
export class SharedModule {}
