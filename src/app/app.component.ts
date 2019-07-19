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
  products = [
    {
      id: 1,
      cate_id: 1,
      product_name: `Tasty Fresh Ball`,
      detail: `The RAM circuit is down, navigate the multi-byte bus so we can quantify the SSL card!`,
      list_price: `489.00`,
      sell_price: `856.00`,
      image: `../assets/images/image1.jpg`,
      rating: 3,
      status: false
    },
    {
      id: 2,
      cate_id: 2,
      product_name: `Refined Cotton Shoes`,
      detail: `Use the digital AI matrix, then you can generate the optical circuit!`,
      list_price: `536.00`,
      sell_price: `873.00`,
      image: `../assets/images/image2.png`,
      rating: 2,
      status: false
    },
    {
      id: 3,
      cate_id: 2,
      product_name: `Refined Metal Ball`,
      detail: `I'll connect the haptic IB bandwidth, that should hard drive the FTP monitor!`,
      list_price: `251.00`,
      sell_price: `305.00`,
      image: `../assets/images/image3.jpg`,
      rating: 4,
      status: true
    },
    {
      id: 4,
      cate_id: 1,
      product_name: `Intelligent Cotton Salad`,
      detail: `You can't input the application without generating the optical COM interface!`,
      list_price: `363.00`,
      sell_price: `687.00`,
      image: `../assets/images/image4.png`,
      rating: 3,
      status: false
    },
    {
      id: 5,
      cate_id: 3,
      product_name: `Intelligent Rubber Shirt`,
      detail: `Use the wireless GB matrix, then you can transmit the back-end monitor!`,
      list_price: `967.00`,
      sell_price: `123.00`,
      image: `../assets/images/image6.jpg`,
      rating: 5,
      status: false
    },
    {
      id: 6,
      cate_id: 2,
      product_name: `Ergonomic Steel Towels`,
      detail: `You can't synthesize the system without bypassing the online SAS matrix!`,
      list_price: `228.00`,
      sell_price: `969.00`,
      image: `../assets/images/image1.jpg`,
      rating: 1,
      status: true
    },
    {
      id: 7,
      cate_id: 3,
      product_name: `Handmade Cotton Fish`,
      detail: `You can't copy the firewall without indexing the mobile CSS application!`,
      list_price: `162.00`,
      sell_price: `631.00`,
      image: `../assets/images/image3.jpg`,
      rating: 2,
      status: false
    },
    {
      id: 8,
      cate_id: 1,
      product_name: `Ergonomic Wooden Keyboard`,
      detail: `parsing the port won't do anything, we need to input the optical XML matrix!`,
      list_price: `820.00`,
      sell_price: `455.00`,
      image: `../assets/images/image2.png`,
      rating: 4,
      status: false
    }
  ]
  editingProduct = {
    id: 0,
    cate_id: 0,
    product_name: '',
    detail: '',
    list_price: '',
    sell_price: '',
    image: '../assets/images/default.png',
    rating: 5,
    status: false
  };
  save = () => {
    this.editingProduct.id === 0 ? this.addProduct(this.editingProduct) : this.saveEditProduct(this.editingProduct);
  }
  clearInput = () => {
    this.editingProduct = {
      id: 0,
      cate_id: 0,
      product_name: '',
      detail: '',
      list_price: '',
      sell_price: '',
      image: '../assets/images/default.png',
      rating: 0,
      status: false
    };
  }
  editProduct = (product) => {
    this.editingProduct = {...product};
  }
  removeProduct = (productId) => {
    this.products = this.products.filter(
        (item) => item.id !== productId
    );
  }
  saveEditProduct = (product) => {
    const newProductList = this.products.map(item => {
      if (item.id === product.id) {
        item.cate_id = product.cate_id;
        item.product_name = product.product_name;
        item.detail = product.detail;
        item.list_price = product.list_price;
        item.sell_price = product.sell_price;
        item.image = product.image;
        item.rating = product.rating;
        item.status = product.status;
      }
      return item;
    });
    this.products = [...newProductList];
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.editingProduct.image = (<FileReader> event.target).result as string;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  addProduct = (event) => {
    let maxId = 0;
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].id >= maxId) {
        maxId = this.products[i].id;
      }
    }
    const item = {
      id: maxId + 1,
      cate_id: event.cate_id,
      product_name: event.product_name,
      detail: event.detail,
      list_price: event.list_price,
      sell_price: event.sell_price,
      image: event.image,
      rating: event.rating,
      status: event.status
    };
    this.products.push(item);
    this.editingProduct = {
      ...this.editingProduct,
      id: 0,
      cate_id: 0,
      product_name: '',
      detail: '',
      list_price: '',
      sell_price: '',
      image: '../assets/images/default.png',
      rating: 0,
      status: false
    };
  }

}
