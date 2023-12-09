import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChangePFPModel } from '../../models/Change-PFP.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environment";
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.scss'
})
export class ChangeProfileComponent {
  ChangePFP:FormGroup;
  ChangePFPModel:ChangePFPModel=new ChangePFPModel();
  selectedFile: File;
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder,
               private http: HttpClient){
    this.ChangePFP = this.fb.group({
      fileUploadPic: '',
      fileUploadCover:''

    });
  }
  UpdatePFP(){
    var fileValue=this.ChangePFP.value;
    this.ChangePFPModel.file =fileValue.fileUploadPic;
    this.ChangePFPModel.file =fileValue.fileUploadCover;
    this.authService.UpdatePFP(this.ChangePFPModel).subscribe(res => {
      this.router.navigateByUrl('profile');

    });
  }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`/user/upload`, formData);
  }

  uploadCoverImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`/user/uploadCover`, formData);
  }

  onFileCoverChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUploadCover() {
    debugger
    this.uploadCoverImage(this.selectedFile).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

  onUpload() {
    debugger
    this.uploadImage(this.selectedFile).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

}
