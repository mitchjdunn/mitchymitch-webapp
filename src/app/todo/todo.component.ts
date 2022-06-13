import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ]

  get items() {
    if (this.filter === 'all'){
      return this.allItems
    }

    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem (description: string){
    this.allItems.unshift({
      description,
      done: false
    })

  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
