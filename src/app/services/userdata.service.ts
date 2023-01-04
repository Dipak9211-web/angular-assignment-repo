import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
   //get request for whole data
    getData(){
      return this.http.get(this.url);
    };
    //post request
     sendData(data:any){
      return this.http.post(this.url, data);
     }


}
