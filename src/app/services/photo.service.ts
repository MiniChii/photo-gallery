import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  public photos: Foto[] = [];

  constructor() { }

    
  public async addNewToGallery() {
    
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    this.photos.unshift({
      filepath: "soon",
      webviewPath: capturedPhoto.webPath,
    });
  }
  
}

export interface Foto {
  filepath: string;
  webviewPath: string;
}
