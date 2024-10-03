import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {personCircleOutline, settingsOutline} from "ionicons/icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class NavbarComponent   {

  constructor() {
    addIcons({settingsOutline})
  }



}
