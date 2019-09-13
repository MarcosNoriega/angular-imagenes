import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interface/Photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styles: []
})
export class UploadPhotoComponent implements OnInit {

  photo: Photo = {
    nombre: null,
    descripcion: null,
    imagen: null
  };

  ok = false;

  photoSelected: ArrayBuffer | string;

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
  }

  uploadPhoto(event) {
    this.photoService.uploadPhotos(this.photo).subscribe(res => {
      this.ok = true;
    });

    this.clearForm();
  }

  onChange(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.photo.imagen = event.target.files[0];

      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.photo.imagen);
    }
  }

  clearForm() {
    this.photo = {
      nombre: null,
      descripcion: null,
      imagen: null
    };

    this.photoSelected = null;
  }

}
