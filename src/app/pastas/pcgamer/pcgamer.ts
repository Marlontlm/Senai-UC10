import { Component, OnInit } from '@angular/core';
import { pcgamer } from 'src/app/models/pcgamer';

@Component({
  selector: 'app-pcgamer',
  templateUrl: './pcgamer.component.html',
  styleUrls: ['./pcgamer.component.css'],
})
export class pcgamerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pcgamerModel = new pcgamer('', '', '', '');

  onSubmit() {
    console.log(this.pcgamerModel);
  }
}
