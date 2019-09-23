import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { UpdatePhotoComponent } from './components/update-photo/update-photo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhotosComponent,
    UploadPhotoComponent,
    UpdatePhotoComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
