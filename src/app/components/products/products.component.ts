import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
// import { CartService } from '../services/cart.service';
// import { Product } from '../models/product.model'//;
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductsService,
    // private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProductList().subscribe({
      next: (data: any) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err :any) => {
        console.error('Error loading products:', err);
      }
    });
  }

  filterProducts(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term)
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product): void {
    // this.cartService.addToCart(product);
    alert(`${product.name} added to your cart!`);
  }
}
