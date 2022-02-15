import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { Observable, pipe } from 'rxjs';
import { IProduct } from 'src/app/shared/models/Iproduct';
import { IModule } from 'src/app/shared/models/imodule';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  modules!: Observable<IModule[]>;

  showProducts!: Observable<IProduct[]>;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.showProducts = this.dataAccess.dbProducts().pipe(map(product => product.filter(product => product.showcase == true)));    
  }

}
