import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() loading: boolean = false
  @Input() countdown: number = 1000
  
  
 constructor() { }



  ngOnInit(): void {
    // wait for html to load before calling function
    window.onload = () => {
      this.startCountdown();  
    }
}
styles: Record<string, string> = {};

startCountdown() {
  //const progressBar = document.getElementsByClassName('progress-bar')[0]

  let width = 1;
  const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
  } else {
    width++;
      this.styles = {
        'width': width.toString() + '%'
      }
    }
}, this.countdown / 100);

}
}
 



 


