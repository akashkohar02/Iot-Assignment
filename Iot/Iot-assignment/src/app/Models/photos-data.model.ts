export class PhotosData{
        public page: number = 1;
        public pages: number = 0;
        public perpage: number = 10;
        public total: number = 0;
        public photo: photo[] = [];
            
}

export class photo{
    public id: string ="";
    public owner: string ="";
    public secret: string ="";
    public server: string ="";
    public farm: string ="";
    public title: string ="";
    public ispublic: string ="";
    public isfriend: string ="";
    public isfamily: string ="";
}