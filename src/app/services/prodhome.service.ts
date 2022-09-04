import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { sample_catergories, sample_products } from 'src/data';
import { category } from '../models/categories';
@Injectable({
  providedIn: 'root'
})
export class ProdhomeService {

  constructor() { }

  getAllProducts():Products[]{
    return sample_products;
  }

  getAllCategories():category[]{
    return sample_catergories;
  }
  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAllProducts().filter((product)=>{
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());

    });
  }
  getProductsByCategory(category:string):Products[]{
    return category ==="All"?
    this.getAllProducts():
    this.getAllProducts().filter(product=>{
      return product.categories?.includes(category)
    });
  }
}
