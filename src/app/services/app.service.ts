import { Injectable } from '@angular/core';
export class List {
    id!: number;
    text!: string;
    icon!: string;
    path!: string;
  }
  const navigation: List[] = [
    { id: 1, text: 'Home', icon: 'home', path:'/' },
    { id: 1, text: 'Category', icon: 'product', path:'category' },
    { id: 2, text: 'Sales', icon: 'money', path:'sales' },
    { id: 3, text: 'Customers', icon: 'group' , path:'customers'},
    { id: 4, text: 'Employees', icon: 'card' , path:'employees'},
    { id: 5, text: 'Reports', icon: 'chart', path:'reports' },
  ];



  @Injectable()
export class Service {
    
  getNavigationList(): List[] {
    return navigation;
  }

}