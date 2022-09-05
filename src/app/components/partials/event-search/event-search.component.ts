import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  esearchTerm='';

  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.esearchTerm)
      this.esearchTerm = params.esearchTerm;
    })
  }

  ngOnInit(): void {
  }
    //methods
    search(term:string):void{
      if(term)
      this.router.navigateByUrl('/esearch/'+term)
    }

}
