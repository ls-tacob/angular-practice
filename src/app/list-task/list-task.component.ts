import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  imports: [],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss',
})
export class ListTaskComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log('entrando por el on init');
  }
  constructor() {
    let nombre = prompt('ingrese su nombre');
    alert(nombre);
    console.log('finaliza el constr list task');
  }
  ngAfterViewInit(): void {
    console.log(
      'han sido inicializadas las vistas del componente principal y las vistas de los hijos.'
    );
  }
}
