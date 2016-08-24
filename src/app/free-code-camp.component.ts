import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS, Http} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'free-code-camp-app',
  templateUrl: 'free-code-camp.component.html',
  styleUrls: ['free-code-camp.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class FreeCodeCampAppComponent {
  title: string = 'Free Code Camp';
}
