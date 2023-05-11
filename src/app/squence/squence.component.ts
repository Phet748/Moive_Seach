import { Component } from '@angular/core';
import { Movie } from '../Moive';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-squence',
  templateUrl: './squence.component.html',
  styleUrls: ['./squence.component.css']
})
export class SquenceComponent {
  Data:Movie[] = [];
  Movie_ID : string ='';
  Movie_Type : string = '';
  Movie_Price : number = 0;
  Movie_Name : string = '';
  constructor(private info: InfoService) {}
  
  ngOnInit() {
    this.info.Data_Web().subscribe((data)=>{this.Data=data
  });
}

Movie_Seach(value: string) {

  this.Movie_ID=this.Data[Number(value)-1].Movieid
  this.Movie_Price=this.Data[Number(value)-1].MoviePrice
  this.Movie_Name=this.Data[Number(value)-1].NameMovie
  this.Movie_Type=this.Data[Number(value)-1].TypeMovie

}
}
