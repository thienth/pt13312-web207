import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13312-web207';
  user = {
    name: 'Nguyen Van Bo',
    age: 21,
    address: 'Ha Noi',
    hometown: 'Thanh Hoa',
  };
}
