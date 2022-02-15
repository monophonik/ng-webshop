import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories!: Observable<IProduct[]>;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.accessories = this.dataAccess.dbProducts().pipe(map(product => product.filter(product => product.category == "Accessory")));
  }

}
