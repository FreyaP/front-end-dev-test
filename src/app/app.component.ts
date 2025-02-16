import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'PENNY FE DEV TEST';
  loading: boolean = false;
  countdown: number = 1;

  ngOnInit() {
    // loading status changes to true then back to false after random loading time
    this.loading = true;
    this.countdown = this.randomInt(4, 8) * 1000
    setTimeout(() => (this.loading = false), this.countdown);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
