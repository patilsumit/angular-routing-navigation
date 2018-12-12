import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You Select Department With ID : {{departmentId}}
    </h3>
    
      <p>
      <button (click)="showOverview()"> Overview  </button>
      <button (click)="showContact()">  Contact   </button>
      </p>

    
    <router-outlet></router-outlet>


     <p>
     <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
     </p> 

      <div>
      <button (click)="gotoDepartments()">Back</button>
      </div>
      
  `,
  styles: [`
      h3
      {
        margin-top:20px;
      }
      a
      {
        padding:10px;
      }
      
        `]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //  this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }

  goPrevious()
  {
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext()
  {
    let nextId=this.departmentId + 1;
    this.router.navigate(['/departments',nextId]);
  }

  gotoDepartments()
  {
     let selectedId=this.departmentId ? this.departmentId : null;
    //  this.router.navigate(['/departments',{id : selectedId, test: 'testvalue'}]); 
     this.router.navigate(['../',{id : selectedId}], {relativeTo:this.route});
     //test: 'testvalue '  this one is optional parameter
  }

  showOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact()
  {
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
