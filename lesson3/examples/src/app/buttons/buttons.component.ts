import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   inactiveSilver: boolean = false;
   inactiveBronze: boolean = false;
   changeLoc: boolean = true;
   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      this.inactive = false;
      this.inactiveSilver = false;
      this.inactiveBronze = false;

   }

}
