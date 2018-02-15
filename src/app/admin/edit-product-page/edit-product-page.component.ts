import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book, ProductService } from '../../product';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.css']
})
export class EditProductPageComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.book = new Book(null, '', '', '', '', 0);

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productService.getBook(+params.get('id'))))
      .subscribe(
        book => this.book = {...book},
        err => console.log(err)
    );
  }

  doSave(): void {
    this.productService.saveBook(this.book);
    this.goBack();
  }

  doDelete(): void {
    this.productService.removeBook(this.book.sku);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
