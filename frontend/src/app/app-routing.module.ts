import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { UpdatePhotoComponent } from './components/update-photo/update-photo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


const routes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'upload', component: UploadPhotoComponent},
  {path: 'update/:id', component: UpdatePhotoComponent},
  {path: 'find/:termino', component: ResultadosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
