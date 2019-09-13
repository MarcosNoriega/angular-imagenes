import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styles: []
})
export class UpdatePhotoComponent implements OnInit {

  photo: any = {
    nombre: null,
    descripcion: null,
     ruta: null
  };

  id: string;

  constructor(private photosService: PhotosService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = params['id'];
      this.photosService.showPhoto(this.id).subscribe((res: any) => {
        this.photo = res;
        this.photo.ruta = 'http://localhost:3000/' + this.photo.ruta;
      });
    });
   }

  ngOnInit() {
  }

  updatePhoto() {
    this.photosService.updatePhotos(this.id, {nombre: this.photo.nombre, descripcion: this.photo.descripcion}).subscribe(res => {
      console.log(res);
    });

    this.router.navigate(['home']);
  }
}
