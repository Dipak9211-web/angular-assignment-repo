import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
   data:any;
   faildPost:any;
   getResData:any[]=[
    {id:100, title:"new developer", body:"react developer"}
   ];
   textButton:String="AddData"
   collapse:boolean=true;
  constructor(private userdataService:UserdataService) { }

  ngOnInit(): void {}
  registerForm = new FormGroup({
       title:new FormControl(''),
       body:new FormControl('')
   })
 
   postData(){
       this.data = this.registerForm.value;
       this.userdataService.sendData(this.data).subscribe((respData)=>{
         if(respData){
            this.getResData.push(respData);
         }else{
          alert("sorry something went to wrong, data post failed")
         }
           
       })
   }

   collapseForm(){
      if(this.collapse==true){
        this.collapse=false;
      }else{
        this.collapse=true
      }
   }

}
