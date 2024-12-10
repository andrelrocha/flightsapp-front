import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flightsapp-front';

  ngOnInit() {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      document.body.classList.add('mobile');
    }
  }
}
