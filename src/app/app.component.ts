import { Component, ViewChild } from '@angular/core';
import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vQuestClient';
  @ViewChild('wizardlg') wizardLarge: ClrWizard;
  lgOpen = true;
}
