import { ContentService } from './content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  accountId: any; comapnyID: any; svAccountId: any; cssClassVar: any; systems: any; collectionData: any;
  constructor(private contentService:  ContentService) { 
   this.cssClassVar = 'css-label lite-green-check';
  }

  ngOnInit() {
  }

  onSearch(event: any){
    console.log("account ID : "+this.accountId+" company Id : "+this.comapnyID+" sv account id : "+this.svAccountId+" event : "+event);
    this.contentService.getResponse(this.accountId, this.comapnyID, this.svAccountId)
    .subscribe(data => {
      this.parseData(data);
    }, err => { 
      console.log('Error received from service : '+err);
     })
  }

  parseData(data){
    console.log('Data received from service : '+JSON.stringify(data));
    this.collectionData = data.data;
  }
  getImage(){
    console.log("get image method call");
    return "../assets/images/small_logo.png";
  }
}
