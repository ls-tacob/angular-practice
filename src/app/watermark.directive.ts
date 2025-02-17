import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appWatermark]'
})

export class WatermarkDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2){
  }

  ngOnInit(): void {
    this.addWatermark();
  }

    addWatermark(){
    const watermarkText = 'fand3Mess10GOAT';
    const div = this.el.nativeElement;

    this.renderer.setStyle(div, 'position', 'relative');
    const watermark = this.renderer.createElement('div');
    this.renderer.setProperty(watermark, 'innerText', watermarkText);

    this.renderer.setStyle(watermark, 'position', 'absolute'); // Establecemos la posición como 'absolute'
    this.renderer.setStyle(watermark, 'top', '50%'); // Lo posicionamos en el centro verticalmente
    this.renderer.setStyle(watermark, 'left', '50%'); // Lo posicionamos en el centro horizontalmente
    this.renderer.setStyle(watermark, 'transform', 'translate(-50%, -50%)'); // Ajustamos para que esté perfectamente centrado
    this.renderer.setStyle(watermark, 'fontSize', '40px'); // Ajustamos el tamaño de la fuente
    this.renderer.setStyle(watermark, 'color', 'rgba(20, 16, 16, 0.3)'); // Definimos el color y la opacidad
    this.renderer.setStyle(watermark, 'zIndex', '9999'); // Aseguramos que esté por encima de otros elementos
    this.renderer.setStyle(watermark, 'pointerEvents', 'none'); // Deshabilitamos la interacción con el elemento
this.renderer.setStyle(
  div,
  'background',
  `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="10" y="40" font-family="Arial" font-size="10" fill="rgba(0, 0, 0, 0.1)" transform="rotate(-15)"%3E${watermarkText}%3C/text%3E%3C/svg%3E')`
);
this.renderer.setStyle(div, 'background-repeat', 'repeat');
this.renderer.setStyle(div, 'background-size', '100px 100px');
    this.renderer.appendChild(this.el.nativeElement, watermark);
  }

}