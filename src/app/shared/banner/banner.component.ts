import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  isDarkMode(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
