import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {personCircleOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-creag',
  templateUrl: './creag.component.html',
  styleUrls: ['./creag.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class CreagComponent   {

  constructor() {
    addIcons({personCircleOutline})
  }



}
