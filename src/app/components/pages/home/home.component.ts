import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProdhomeService } from 'src/app/services/prodhome.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Products[]=[];
  constructor(private productsService:ProdhomeService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.category){
          this.products = this.productsService.getProductsByCategory(params.category);
      }else if(params.searchTerm){
          this.products = this.productsService.getAllProductsBySearchTerm(params.searchTerm)
      }else
      this.products = productsService.getAllProducts();
    })
   }

  ngOnInit(): void {

  }
}

