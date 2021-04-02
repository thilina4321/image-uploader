import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(){}
  imagePreview: string;

  constructor(private dataService: DataService, private router:Router) {}

  form = new FormGroup({
    name: new FormControl(null),
    imageFile: new FormControl(null),
  });

  uploadFile(event) {
    const file = event.files[0];
    this.form.patchValue({
      imageFile: file,
    });
    this.form.get("imageFile").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.dataService.addData(
      this.form.get("name").value,
      this.form.get("imageFile").value
    ).subscribe((resData)=>{
      console.log(resData);
      this.form.reset()
      this.router.navigateByUrl('details')

    })
  }

}
