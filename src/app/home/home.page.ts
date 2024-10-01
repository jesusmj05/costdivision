import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {NavbarComponent} from "../navbar/navbar.component";
import {IonicModule} from "@ionic/angular";
import {GrupoComponent} from "../grupo/grupo.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NavbarComponent, IonicModule, GrupoComponent],
})
export class HomePage {
  constructor() {}
}
