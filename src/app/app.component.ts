import {Component} from '@angular/core';
import {WheelRotateAxis, WheelRotateEvent} from "ng-wheel-rotate";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  wheelRotateControls = {
    debounce: new FormControl(0),
    delay: new FormControl(0),
    disabled: new FormControl(false),
    wheelRotateAxis: new FormControl(WheelRotateAxis.BOTH),
  };
  wheelRotateEvent!: WheelRotateEvent;
  wheelRotateAxis = WheelRotateAxis;

  onWheelRotate(data: WheelRotateEvent) {
    this.wheelRotateEvent = data;
  }
}
