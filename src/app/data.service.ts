import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface productData{
  id:string
  name:string,
  imageFile:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:3000/image'

  addData(title:string, image:string){

    const data = new FormData()
    data.append('name', title)
    data.append('image', image, title)

   return this.http.post(this.url, data)
  }

  fetchData(){
    return this.http.get<{products:productData[]}>(this.url)
  }
}
