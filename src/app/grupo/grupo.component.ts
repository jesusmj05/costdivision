import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-grupo',
    templateUrl: './grupo.component.html',
    styleUrls: ['./grupo.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class GrupoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
