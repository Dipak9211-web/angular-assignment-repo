import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private userdatasv:UserdataService) { }
   user:any;
  ngOnInit(): void {
     this.userdatasv.getData().subscribe((val)=>{
     
       this.user = val;
     })
  }

}
