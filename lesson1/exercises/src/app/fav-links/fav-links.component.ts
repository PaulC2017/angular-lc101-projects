import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks: string[] = ['https://www.att.com', 'https://www.verizon.com/home/verizonglobalhome/ghp_landing.aspx'];
  favLinks = "Here are some links for you:";
  constructor() { }

  ngOnInit() {
  }

}
