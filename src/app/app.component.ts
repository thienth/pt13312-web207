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
    birthDate: new Date(1996, 3, 6),
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg',
    address: 'ktx mỹ đình',
    homeTown: 'phú thọ',
    bank: '100'
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
  editingHero = {
    id: 0,
    name: ''
  };
  save = () => {
    this.editingHero.id === 0 ? this.addHero(this.editingHero) : this.saveEditHero(this.editingHero);
  }
  clearInput = () => {
    this.editingHero = {
      id: 0,
      name: ''
    };
  }
  editHero = (hero) => {
    this.editingHero = {...hero};
  };
  removeHero = (heroId) => {
    this.heroList = this.heroList.filter(
        (item) => item.id !== heroId
    );
  }
  saveEditHero = (hero) => {
    const newHeroList = this.heroList.map(item => {
      if (item.id === hero.id) {
        item.name = hero.name
      }
      return item;
    });
    this.heroList = [...newHeroList];
  }
  addHero = (event) => {
    let maxId = 0;
    for (let i = 0; i < this.heroList.length; ++i) {
      if (this.heroList[i].id >= maxId) {
        maxId = this.heroList[i].id;
      }
    }
    const item = {
      id: maxId + 1,
      name: event.name
    };
    this.heroList.push(item);
    this.editingHero = {
      ...this.editingHero,
      id: 0,
      name: ''
    }
  }

}
