import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/module/employee';
import { EmpserviceService } from 'src/app/Service/empservice.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  data:Employee;
 name='';
email='';
phone='';
location='';

  constructor(private empservice:EmpserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(): void {
     
     const data = {
      name: this.name,
     email: this.email,
       phone: this.phone,
       location:this.location,
     }
    
    
    this.empservice.create(data).subscribe(
      () => {
        this.router.navigate(['/alllist'])
      }
    )
  }


}
