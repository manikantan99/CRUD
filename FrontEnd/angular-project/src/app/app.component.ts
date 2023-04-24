import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;
  formData: any[] = [];
  isEdit: boolean = false;
  dataId: string = '';

  constructor( private appservice:AppService)
   {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      designation: new FormControl('',[Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone_no: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    this.getAllData();
}
  onSubmit() {
    this.isEdit = false;
    const customObj={
      name:this.myForm.controls['name'].value,
      email:this.myForm.controls['email'].value,
      designation:this.myForm.controls['designation'].value,
      address:this.myForm.controls['address'].value,
      phone_no:this.myForm.controls['phone_no'].value
    }
    this.appservice.postData(customObj).subscribe((data)=>{
      console.log("data",data);
      this.getAllData()
      })
  }
  removedata(id: string){
    this.appservice.deleteData(id).subscribe((result:any)=>{
      // this.formData = result;
      this.getAllData();
    })
  }

  editData(id: string){
    this.isEdit = true;
    this.dataId = id;
    this.appservice.getData(id).subscribe((result:any)=>{
      const data = result;
      this.myForm = new FormGroup({
        name: new FormControl(data.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        designation: new FormControl(data.designation,[Validators.required, Validators.minLength(3)]),
        address: new FormControl(data.address, [Validators.required, Validators.minLength(3)]),
        phone_no: new FormControl(data.phone_no, [Validators.required, Validators.minLength(3)]),
      });
    })
  }

  updateData() {
     const customObj2={
      name:this.myForm.controls['name'].value,
      email:this.myForm.controls['email'].value,
      designation:this.myForm.controls['designation'].value,
      address:this.myForm.controls['address'].value,
      phone_no:this.myForm.controls['phone_no'].value
    }
    this.appservice.updataData(customObj2, this.dataId).subscribe((data:any)=>{
      // this.formData = data;
      this.getAllData();
    });
  }

  getAllData() {
    this.appservice.showData().subscribe((result: any)=>{
      this.formData = result;
    });
    this.isEdit = false;
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      designation: new FormControl('',[Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone_no: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }
}
