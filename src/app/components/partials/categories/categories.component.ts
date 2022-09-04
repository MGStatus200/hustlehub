import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/categories';
import { ProdhomeService } from 'src/app/services/prodhome.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories?:category[];
  constructor(productsService:ProdhomeService) {
    this.categories = productsService.getAllCategories();
  }

  ngOnInit(): void {
  }

}
