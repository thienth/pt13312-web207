import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'pt13312-web207';

	user = {
		name: 'thienth',
		age: 30,
		address: '15 dong quan',
		hometown: 'nam dinh'
	}

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
			(item) => item.id != heroId
		)
	}

	addHero = (event) => {
		// neu nhan phim enter
		if(event.keyCode === 13){
			// di tim so id lon nhat
			let maxId = 0;
			for (var i = 0; i < this.heroList.length; ++i) {
				if(this.heroList[i].id >= maxId){
					maxId = this.heroList[i].id;
				}
			}

			let item = {
				id: maxId+1,
				name: event.target.value
			}

			// add phan tu moi vao mang
			this.heroList.push(item);
			// xoa trang text trong the input
			event.target.value = "";
		}
	}






}
