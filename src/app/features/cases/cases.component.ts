import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  cases!: Observable<IProduct[]>

  constructor(private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.cases = this.dataAccess.dbProducts().pipe(map(product => product.filter(product => product.category == "Case")));
  }

}
