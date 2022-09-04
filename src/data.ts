import { category } from "./app/models/categories";
import { Products } from "./app/models/products";

export const sample_products:Products[]=[
  {
    id:"1",
    name:"Ice-cream",
    minPrice:5,
    maxPrice:25,
    categories:['food'],
    imageUrl:'assets/ice-cream.jpg',
    description:'we have vanilla, straberry and chocolate',
    vendorid:1
  },
  {
    id:"1",
    name:"Coke",
    minPrice:5,
    maxPrice:25,
    categories:['food'],
    imageUrl:'assets/ice-cream.jpg',
    description:'we have fanta, sprite and stoney',
    vendorid:1
  },
  {
    id:"1",
    name:"patio chairs",
    minPrice:150,
    maxPrice:300,
    categories:['furniture'],
    imageUrl:'assets/ice-cream.jpg',
    description:'made out of straw',
    vendorid:2
  },
  {
    id:"1",
    name:"kota",
    minPrice:15,
    maxPrice:45,
    categories:['furniture'],
    imageUrl:'assets/ice-cream.jpg',
    description:'bread with fire ingrediants',
    vendorid:1
  }
]
export const sample_catergories:category[]=[
  {name:'All',count:8},
  {name:'food',count:4},
  {name:'furniture',count:2}
]
