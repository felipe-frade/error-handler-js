import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  constructor(
  ) { }

  ngOnInit(): void {
    throw Error('The app component has thrown an error!');
  }
}
