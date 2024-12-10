import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkDevice();
  }

  ngOnInit() {
    this.checkDevice();
  }

  private checkDevice() {
    this.isMobile = window.innerWidth < 1024;
    document.body.classList.toggle('mobile', this.isMobile);
  }
}
