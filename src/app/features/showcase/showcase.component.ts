import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  private url: string = 'assets/db/db.json';
  //private showCaseProducts: IProduct[] = [];
  private showCaseProducts!: IProduct[];
  modules!: Observable<any>;

  constructor(
    private dataAccess: DataAccessService,
    private route: ActivatedRoute,
    private client: HttpClient //test
    //private modules: IProduct[]
  ) { }


  ngOnInit(): void {
    // let data = this.dataAccess.showcaseProducts;
    //console.log(this.dataAccess.showcaseProducts.toString())
    
    //this.modules = this.dataAccess.showcaseProducts;

    //FUNKAR
    // this.getModules().subscribe(data => {
    // //console.log(data.modules);
    //   this.modules = data.modules;
    //   console.log(this.modules);
    // });

    // this.showCaseProducts = this.dataAccess.showcaseProducts().subscribe(data => {
    //   console.log(data.modules)
    //   return data.modules;
    // });

    this.modules = this.dataAccess.showcaseProducts().pipe(map(data => data.modules));

    //Funkar, men inte snygg.
    // this.dataAccess.showcaseProducts().subscribe(data => {
    //   this.modules = data;
    //   console.log(this.modules);
    // })

    
  }

  getModules(): Observable<any> {
    return this.client.get(this.url);
    
    this.client.get(this.url).subscribe((response: any) => {
      this.modules = response.json().modules;
      console.log("modules value: " + this.modules)
    });
  }

}
