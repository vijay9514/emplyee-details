import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpserviceService } from 'src/app/Service/empservice.service';

@Component({
  selector: 'app-detailemp',
  templateUrl: './detailemp.component.html',
  styleUrls: ['./detailemp.component.css']
})
export class DetailempComponent implements OnInit {
id:any;
data:any;

  constructor(private router:ActivatedRoute,private empservice:EmpserviceService) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.getone();


  }
  getone(){
this.empservice.getone(this.id).subscribe(data=>{
  this.data=data;

})
  }

}
