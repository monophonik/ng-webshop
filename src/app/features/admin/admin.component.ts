import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataAccessService } from 'src/app/services/data-access.service';
import { Categories } from 'src/app/shared/enums/categories';
import { IProduct } from 'src/app/shared/models/Iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addProductForm!: FormGroup;

  constructor(
    private dataAccess: DataAccessService,
    private fb: FormBuilder,
    private datePipe: DatePipe) { }

  //Bryt ut i egna komponenter?

  allProducts!: IProduct[];
  selectedToEdit: any;



  categories = ["Module", "Case", "Accessory"];

  regExPositiveNr = /^[0-9]*$/;
  regExUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/


  initForm() {
    this.addProductForm = this.fb.group({
      category: ['', Validators.required],
      articlenr: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)]
      ],
      stock: ['', [
          Validators.required,
          Validators.pattern(this.regExPositiveNr)]
      ],
      showcase: [false, Validators.required],
      manufacturer: ['', Validators.required],
      name: ['', Validators.required],
      function: [''],
      hp: ['', Validators.pattern(this.regExPositiveNr)],
      price: ['', [
          Validators.required,
          Validators.pattern(this.regExPositiveNr)]
      ],
      image: ['', Validators.pattern(this.regExUrl)],
      description: ['', Validators.required]
    });
  }

  submitProduct() {
    //this.dataAccess.addProduct();

    let productToPost: any = {
      category: this.addProductForm.get('category')?.value,
      articlenr: this.addProductForm.get('articlenr')?.value,
      dateadded: this.datePipe.transform(new Date(), 'yyyy-MM-dd')?.toString(),
      stock: this.addProductForm.get('stock')?.value,
      showcase: this.addProductForm.get('showcase')?.value,
      manufacturer: this.addProductForm.get('manufacturer')?.value,
      name: this.addProductForm.get('name')?.value,
      function: this.addProductForm.get('function')?.value,
      hp: this.addProductForm.get('hp')?.value,
      price: this.addProductForm.get('price')?.value,
      image: this.addProductForm.get('image')?.value,
      description: this.addProductForm.get('description')?.value
    }
    
    this.dataAccess.addProduct(productToPost);
    console.log(productToPost);
    this.addProductForm.reset();
    alert("New product added to database");

  }

  ngOnInit(): void {
    this.initForm()
    this.dataAccess.dbProducts().subscribe(item => this.allProducts = item);
  }

}
