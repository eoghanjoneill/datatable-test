import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-datatable',
  templateUrl: './tabs-datatable.component.html',
  styleUrls: ['./tabs-datatable.component.css']
})
export class TabsDatatableComponent {

    rows = [];  

    constructor() {
      this.fetch(data => {
        this.rows = data.splice(0, 15);
        console.log(this.rows);
      });
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/company.json`);
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
    }

}