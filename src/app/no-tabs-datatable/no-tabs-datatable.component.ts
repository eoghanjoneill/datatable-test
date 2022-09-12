import { Component } from '@angular/core';

@Component({
  selector: 'column-force-demo',
  templateUrl: './no-tabs-datatable.component.html'
})
export class NoTabsDatatableComponent {
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