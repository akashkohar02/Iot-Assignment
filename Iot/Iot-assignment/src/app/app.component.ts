import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { photo, PhotosData } from './Models/photos-data.model';
import { FlickerService } from './services/flicker-services/flicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: boolean = false;
  photoData: PhotosData;
  searchText: string ='';

  constructor(private flickerService: FlickerService,
    private cd: ChangeDetectorRef){
    this.photoData = new PhotosData();
  }

  ngOnInit(){
    this.getData();
  }
  getData(searchValue?: string){
    this.isLoading = true;
    this.flickerService.getData(this.photoData.page, this.photoData.perpage, searchValue ? searchValue : '').subscribe({
     next: (res)=>{
        if(res.stat == 'ok'){
        this.photoData.page = res.photos.page;
        this.photoData.pages = res.photos.pages;
        this.photoData.perpage = res.photos.perpage;
        if(res.photos.photo && res.photos.photo.length && res.photos.photo.length>0){
          res.photos.photo.forEach((data: photo)=>{
            this.photoData.photo.push(data);
          }) 
        }
        this.photoData.perpage = res.photos.perpage;        
      }
      this.isLoading = false;
      this.cd.detectChanges();
      },
     error: (err)=>{
       this.isLoading = false;
        alert(err)
      }
    })
  }

  public loadMoreData(){
    this.isLoading = true;
    this.photoData.page += 1;
    this.getData(this.searchText);
  }
  public searchData(text: string){
    this.isLoading = true;
    this.photoData = new PhotosData();
    this.searchText = text;
    this.getData(text);
  }
}
