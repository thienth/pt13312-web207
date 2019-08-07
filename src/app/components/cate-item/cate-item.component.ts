import { Component, OnInit, Input,
		Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {

  constructor() { }
  @Input() cate: any;
  @Output() onRemoveCate = new EventEmitter<any>();

  ngOnInit() {
  }

  onRemoveEvent(cate){
  	this.onRemoveCate.emit(cate);
  }

}
