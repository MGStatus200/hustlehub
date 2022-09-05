import { Component, OnInit } from '@angular/core';
import { hirecategory } from 'src/app/models/hirecategories';
import { HireService } from 'src/app/services/hire.service';

@Component({
  selector: 'app-hirecategories',
  templateUrl: './hirecategories.component.html',
  styleUrls: ['./hirecategories.component.css']
})
export class HirecategoriesComponent implements OnInit {

   categories?:hirecategory[];

  constructor(hireService:HireService) {
    this.categories = hireService.getAllCategories();
  }

  ngOnInit(): void {
  }

}
