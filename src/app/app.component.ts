import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13312-web207';

  user = {
    name: 'Quang',
    age: '23',
    address: 'ktx mỹ đình',
    hometown: 'phú thọ'
  };
  heroList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  removeHero = (heroId) => {
    this.heroList = this.heroList.filter(
        (item) => item.id !== heroId
    );
  }
  addHero = (event) => {
    if (event.key === 'Enter') {
      let maxId = 0;
      for (let i = 0; i < this.heroList.length; ++i) {
        if (this.heroList[i].id >= maxId) {
          maxId = this.heroList[i].id;
        }
      }
      let item = {
        id: maxId + 1,
        name: event.target.value
      };
      this.heroList.push(item);

      event.target.value = "";
    }
  }
}
