import {  Component   } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from "./add-task/add-task.component";
import { ListTaskComponent } from "./list-task/list-task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDestroyed: boolean = true;
  countDown: number;
  intervalId: any;

  constructor() {
    console.log('ini el constr');
    this.countDown= 10;
    this.intervalId = setInterval(()=>{
      this.countDown--;
      if(this.countDown=== 0){
        clearInterval(this.intervalId)
        this.isDestroyed=false
      }
    },1000);

    setInterval(() => {
      console.log('Esto se ejecuta cada 2 segundos');
    }, 2000);

  }
}
