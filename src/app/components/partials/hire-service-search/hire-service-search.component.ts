import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hire-service-search',
  templateUrl: './hire-service-search.component.html',
  styleUrls: ['./hire-service-search.component.css']
})
export class HireServiceSearchComponent implements OnInit {


  hsearchTerm='';

  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.hsearchTerm)
      this.hsearchTerm = params.hsearchTerm;
    })
  }

  ngOnInit(): void {
  }

  //methods
  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/hsearch/'+term)
  }

}
