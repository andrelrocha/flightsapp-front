import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  private readonly srcLightMode: string = 'assets/images/banner-light-mode.png';
  private readonly srcDarkMode: string = 'assets/images/banner-dark-mode.png';

  @Input() alt: string = '';

  get src(): string {
    return this.isDarkMode() ? this.srcDarkMode : this.srcLightMode;
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
