import { Component } from '@angular/core';
import { Example } from '../../components/example-viewer/example.class';
import { ActionButtonComponent } from '../../example-components/action-button/action-button.component';

@Component({
  selector: 'app-action-button-demo',
  templateUrl: './action-button-demo.component.html',
  styleUrls: ['./action-button-demo.component.scss'],
})
export class ActionButtonDemoComponent {
  actionButtonComponent = new Example(ActionButtonComponent, 'action-button', 'Action button - Position is unset');
}
