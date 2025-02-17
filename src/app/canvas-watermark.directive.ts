import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCanvasWatermark]',
})
export class CanvasWatermarkDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.addCanvasWatermark();
  }
  addCanvasWatermark() {
    // Crear un canvas
    const canvas = this.renderer.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const watermarkImage = new Image();

    // Establecer el estilo del canvas
    this.renderer.setStyle(canvas, 'position', 'absolute');
    this.renderer.setStyle(canvas, 'top', '0');
    this.renderer.setStyle(canvas, 'left', '0');
    this.renderer.setStyle(canvas, 'pointerEvents', 'none'); // Hacer que no interfiera con la interacción

    // Cargar la imagen de la marca de agua
    watermarkImage.onload = () => {
      // Establecer el tamaño del canvas después de cargar la imagen
      const margin = 100;
      const canvasWidth = this.el.nativeElement.offsetWidth;
      const canvasHeight = this.el.nativeElement.offsetHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Establecer el texto y estilo
      const watermarkText = 'agsd5f4g6sd5f4%';

      ctx.font = '20px Arial';
      ctx.fillStyle = 'rgba(212, 36, 36, 0.1)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Dibujar la imagen repetidamente en el canvas
      for (let x = -canvasWidth; x < canvasWidth; x += margin) {
        for (let y = -canvasHeight; y < canvasHeight; y += margin) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((-15 * Math.PI) / 180); // Rotar imagen
          ctx.drawImage(watermarkImage, 0, 0, 100, 100); // Dibujar la imagen
          ctx.restore();
        }
      }

      // Dibujar el texto repetidamente en el canvas
      for (let x = -canvasWidth; x < canvasWidth; x += margin) {
        for (let y = -canvasHeight; y < canvasHeight; y += margin) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((-15 * Math.PI) / 180); // Rotar texto
          ctx.fillText(watermarkText, 0, 0); // Dibujar el texto
          ctx.restore();
        }
      }

      // Agregar el canvas al elemento del DOM
      this.renderer.appendChild(this.el.nativeElement, canvas);
    };

this.renderer.setStyle(
  canvas,
  'background',
  `url('assets/images/policeMark.png')`
);

  }
}