import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];

  constructor(private photosService: PhotosService) {
    this.photosService.getPhotos().subscribe(res => {
      console.log(res);
      this.photos = res;
    });
   }

  ngOnInit() {
  }

}
