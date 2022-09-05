import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProdhomeService } from 'src/app/services/prodhome.service';

@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent implements OnInit {

  product!:Products;
  constructor(
            activatedRoute:ActivatedRoute,
    private productService:ProdhomeService,
    ) {
      activatedRoute.params.subscribe((params)=>{
        if(params.id) //if not null of undefined
        this.product = this.productService.getProductById(params.id);
      })

    }

  ngOnInit(): void {
  }

}
