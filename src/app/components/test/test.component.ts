import { Component } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
 result: number = 0;

  calculateSum(): void {
    const num1 = 10;
    const num2 = 20;
    this.result = num1 + num2;
  }
 //lecture eample
 num:number =10 ;
 constructor(){}
 ngOnInit():void{}
 changeNum(){
  this.num=100;
 }
 changeAfterTime(){
  timer(3000).subscribe(()=>{
    this.num=200;
  })
 }


}
