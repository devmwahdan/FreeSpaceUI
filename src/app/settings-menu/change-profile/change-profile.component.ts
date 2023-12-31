import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChangePFPModel } from '../../models/Change-PFP.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environment";
import {SharedService} from "../../services/shared.service";
import { UserModel } from '../../models/user-model';
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.scss'
})
export class ChangeProfileComponent {
  ChangePFP:FormGroup;
  ChangePFPModel:ChangePFPModel=new ChangePFPModel();
  selectedFile: File;
  user:UserModel;

  @ViewChild('fileInputProfile') fileInputProfile: any;

  @ViewChild('fileInputCover') fileInputCover: any;
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder,
               private sharedService: SharedService,
               private http: HttpClient){
    this.ChangePFP = this.fb.group({
      fileUploadPic: '',
      fileUploadCover:''

    });
  }
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
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
    this.uploadCoverImage(this.selectedFile).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
        this.sharedService.updateProfile(true);
        this.fileInputCover.nativeElement.value = '';
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

  onUpload() {
    this.uploadImage(this.selectedFile).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
debugger
        this.sharedService.updateProfile(true);
        this.fileInputProfile.nativeElement.value = '';
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

}
