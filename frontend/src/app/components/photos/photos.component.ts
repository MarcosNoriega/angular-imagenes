import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];

  constructor(private photosService: PhotosService, private router: Router) {
    this.photosService.getPhotos().subscribe((res: any[]) => {
      this.photos.push(...res);
      for (let photo of this.photos) {
        photo.ruta = 'http://localhost:3000/' + photo.ruta;
      }
      console.log(this.photos);
    });
   }

  deletePhoto(id: string) {
    if (confirm('Estas serguro de eliminar esta foto')) {
      this.photosService.deletePhoto(id).subscribe((res: any) => {
        this.photos = this.photos.filter(photo => photo._id !== res._id);
      });
    }
  }

  updatePhoto(id: string) {
    this.router.navigate(['update', id]);
  }

  ngOnInit() {
  }

}
