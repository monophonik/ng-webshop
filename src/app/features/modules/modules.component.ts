import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';
import { Categories } from 'src/app/shared/enums/categories';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules!: Observable<IProduct[]>;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //this.modules = this.dataAccess.allProducts().pipe(map(data => data.modules));
    this.modules = this.dataAccess.dbProducts().pipe(map(product => product.filter(product => product.category == "Module")));
  }

}
