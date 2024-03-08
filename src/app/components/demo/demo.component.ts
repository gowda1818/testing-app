import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  countClicks :number = 0;

  constructor(){}

  ngOnInit(){}

  addClick():void{
    this.countClicks++;
  }

  removeClick():void{
    this.countClicks--;
  }

}
