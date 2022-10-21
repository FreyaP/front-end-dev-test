import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  time: string = "100"
  @Input() loading: boolean = false
  @Input() countdown: number = 100
  styles: Record<string, string> = {};
  
  
 constructor() { }

  ngOnInit(): void {
    // wait for html to load before calling function
    window.onload = () => {
      this.startCountdown();  
    }
}

startCountdown() {
  let width = 100;
  const interval = setInterval(() => {
  if (width <= 1) {
    clearInterval(interval);
  } else {
    width--;
      this.styles = {
        'width': width.toString() + '%',
        'opacity': width.toString() + '%',
      }
      this.time = width.toString() + " left...!!!"
    }
}, this.countdown / 100);

}
}
 



 


