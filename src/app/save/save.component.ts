import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private dataService:DataService) { }
  products:{id:string, name:string, imageFile:string}[]

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((resData)=>{
      console.log(resData.products);
      this.products = resData.products

    })
  }

}
