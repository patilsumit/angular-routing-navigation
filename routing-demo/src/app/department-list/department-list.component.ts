import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
             <h3>Department List</h3>
             <ul>
                 <li (click)="onSelect(department)" [class.active]="isSelected(department)" *ngFor="let department of departments">
                   <span class="badge">{{department.id}}{{department.name}}</span>
                 </li>
             </ul>
             `,
  styles: [
          `
           .active
           {
             background-color:red;
             width:200px;
           }
          `
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments=[
     {"id":1 ,"name":"Angular"},
     {"id":2 ,"name":"MongoDB"},
     {"id":3 ,"name":"Bootstrap"},
     {"id":4 ,"name":"Node"},
     {"id":5 ,"name":"Ruby"},
  ];

  
  constructor(private router:Router,private route:ActivatedRoute) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
       let id=parseInt(params.get('id'));
       this.selectedId=id;
    })
  }

  onSelect(department)
  {
    // this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id],{relativeTo:this.route});
  }

  isSelected(department)
  {
     return department.id === this.selectedId;
  }

}
