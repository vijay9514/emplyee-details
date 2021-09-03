import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { EmpserviceService } from 'src/app/Service/empservice.service';
import {MatSort} from '@angular/material/sort'
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/module/employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  
  result:Employee[]=[];
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Contact','Location','Action'];
  dataSource =new  MatTableDataSource<Employee>(this.result);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public service:EmpserviceService, private router:Router,) { }

  ngOnInit(): void {
    this.service.all().subscribe((posRes)=>{
      this.result=posRes;
     this.dataSource=new MatTableDataSource<Employee>(this.result);
    this.dataSource.paginator=this.paginator;
    
    this.dataSource.sort=this.sort

    },(errRes:HttpErrorResponse)=>{
      console.log(errRes);
      
    })
    }
  }
