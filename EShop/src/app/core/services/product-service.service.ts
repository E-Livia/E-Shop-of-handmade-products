import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private searchProducts = new BehaviorSubject<string>('');
  searchProd$ = this.searchProducts.asObservable();

  private shouldOrderByNameAsc = new BehaviorSubject<boolean>(false);
  shouldOrderByNameAsc$ = this.shouldOrderByNameAsc.asObservable();

  private shouldOrderImplicit = new BehaviorSubject<boolean>(false);
  shouldOrderImplicit$ = this.shouldOrderImplicit.asObservable();

  private shouldOrderByNameDesc = new BehaviorSubject<boolean>(false);
  shouldOrderByNameDesc$ = this.shouldOrderByNameDesc.asObservable();

  readonly APIUrl = "https://localhost:44376/api";

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  getProductList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/product');
  }

  orderProductByNameASC(): Observable<any[]> {
    return this.apiService.get('/api/Product/OrderByNameASC');
  }
  orderProductByNameDESC(): Observable<any[]> {
    return this.apiService.get('/api/Product/OrderByNameDESC');
  }

  setShouldOrderByNameAsc(value:boolean) {
    this.shouldOrderByNameAsc.next(value);
  }
  setShouldOrderImplicit(value:boolean){
    this.shouldOrderImplicit.next(value);
  }
  setShouldOrderByNameDesc(value:boolean){
    this.shouldOrderByNameDesc.next(value);
  }

  getProductByCategory(categoryName: string): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + `/product/categories/${categoryName}`);
  }

  addProduct(val: any) {
    return this.http.post(this.APIUrl + '/product', val);
  }

  getProductById(productId: number) {
    return this.apiService.get(`/api/product/${productId}`).pipe(
      map((response: any) => response[0])
    );
  }

  searchProduct(text: string): Observable<any[]> {
    return this.apiService.get(`/api/product/search/${text}`);
  }

  setSearchText(value: string) {
    this.searchProducts.next(value);
  }

  insertProduct(productCred: any) {
    return this.apiService.post(`/api/product`, productCred);
  }

  deleteProduct(name:string){
    return this.apiService.delete(`/api/Product/${name}`);
  }
}
