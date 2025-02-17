import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('el component ha sido destruido.');
  }
}
