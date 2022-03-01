import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myFunc() {
    var num1 = (document.getElementById('exchageRateDate1') as HTMLInputElement)
      .value;
    var num2 = (document.getElementById('exchageRateDate2') as HTMLInputElement)
      .value;
    var num3 = (document.getElementById('exchageRateDate3') as HTMLInputElement)
      .value;

    // console.log(num1);
    alert("First Name is "+num1+' '+"middle Name is "+num2+' '+"Last Name is "+num3);
  }
}
