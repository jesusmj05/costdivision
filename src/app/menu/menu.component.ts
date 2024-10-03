import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    NavbarComponent
  ]
})
export class MenuComponent   {

  constructor() { }



}
