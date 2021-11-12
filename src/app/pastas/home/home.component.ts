import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    stagePadding: 7,
    dots: false,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    items: 3,
    navText: [
      "<img src='../../../assets/img/Setavolta.png'>",
      "<img src='../../../assets/img/Setago.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  };

  customOptions2: OwlOptions = {
    loop: true,
    autoplay: true,
    stagePadding: 7,
    dots: false,
    autoWidth: true,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    items: 2,
    navText: [
      "<img src='../../../assets/img/Setavolta.png'>",
      "<img src='../../../assets/img/Setago.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      600: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  };
}
