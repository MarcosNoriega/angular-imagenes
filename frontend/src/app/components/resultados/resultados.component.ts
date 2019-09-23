import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  photos: any[] = [];

  constructor(private photosService: PhotosService, activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.photosService.findPhotos(params['termino']).subscribe((res: any[]) => {
        this.photos = [];
        this.photos.push(...res);
        // tslint:disable-next-line:prefer-const
        for (let photo of this.photos) {
          photo.ruta = 'http://localhost:3000/' + photo.ruta;
        }
      });
    });
  }

  ngOnInit() {
  }

}
