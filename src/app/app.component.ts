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
    birth: new Date(1998, 1, 28),
    bank: 30,
    address: 'Ha Noi',
    hometown: 'Thanh Hoa',
  };

   Heroes = [
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

   heroTmp = {
     id: 0,
     name: ''
   } ;
   editHero = (hero) => {
     this.heroTmp = {...hero};
    }
   removeHero = (id) => {
     this.Heroes = this.Heroes.filter(x => x.id !== id);
   }

   addHero = (event) => {
     if (event.keyCode === 13) {
     const idArr = this.Heroes.map(item => item.id);
     const idMax = Math.max(...idArr);
     const hero = {
       id: idMax + 1,
       name: event.target.value,
     };
     this.Heroes.push(hero);
     event.target.value = '';
   }}

}
