import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';


const routes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'upload', component: UploadPhotoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
