import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WheelRotateAxis, WheelRotateEvent} from "ng-wheel-rotate";
import {FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  $wheelRotateEvent = new BehaviorSubject<WheelRotateEvent>(null!);

  wheelRotateControls = {
    debounce: new FormControl(0),
    delay: new FormControl(0),
    disabled: new FormControl(false),
    wheelRotateAxis: new FormControl(WheelRotateAxis.BOTH),
  };
  wheelRotateAxis = WheelRotateAxis;

  onWheelRotate(data: WheelRotateEvent) {
    this.$wheelRotateEvent.next(data);
  }
}
