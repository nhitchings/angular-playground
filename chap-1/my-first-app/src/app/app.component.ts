import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nathan';
  buttonClicks = [];
  showParagraph = true;

  checkColor(index): boolean {
    if (index >= 5) {
      return true;
    } else {
      return false;
    }
  }

  onResetUser() {
    this.name = '';
  }

  onPTagBtnClick() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date());
  }
}
