import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interface/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = 'http://localhost:3000/imagenes';

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get(this.url);
  }

  uploadPhotos(photo: Photo) {
    const fd = new FormData();
    fd.append('nombre', photo.nombre);
    fd.append('descripcion', photo.descripcion);
    fd.append('imagen', photo.imagen);
    return this.http.post(this.url + '/create', fd);
  }
}
