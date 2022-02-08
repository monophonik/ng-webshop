import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id!: number;

  //idRoute: any;
  product!: IProduct;
  //Sckia articlenr, eller kanske hela objektet med activatedroute???

  constructor(
    private route: ActivatedRoute,
    private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataAccess.dbSingleProduct(id).subscribe(item => this.product = item);
  }

}
