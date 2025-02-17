import {  Component, NgModule  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTaskComponent } from "./add-task/add-task.component";
import { ListTaskComponent } from "./list-task/list-task.component";
import { CommonModule } from '@angular/common';
import { CanvasWatermarkDirective } from './canvas-watermark.directive';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AddTaskComponent,
    ListTaskComponent,
    CommonModule,
    CanvasWatermarkDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDestroyed: boolean = true;
  countDown: number;
  intervalId: any;

  constructor() {
    console.log('ini el constr');
    this.countDown = 10;
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalId);
        this.isDestroyed = false;
      }
    }, 1000);

    setInterval(() => {
      console.log('Esto se ejecuta cada 2 segundos');
    }, 2000);
  }
}
