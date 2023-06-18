import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
    providedIn: 'root'
})

export class CategoryServiceService {
    private selectedCategorySubject = new BehaviorSubject<string>('');
    selectedCategory$ = this.selectedCategorySubject.asObservable();

    constructor(private http:HttpClient, private apiService:ApiService) { }
  
    setSelectedCategory(category: string) {
        this.selectedCategorySubject.next(category);
    }

    getCategoryByParent(categoryParent: string):Observable<any[]>{
        return this.apiService.get(`/api/category/${categoryParent}`);
    }

    getParentsForCategories():Observable<any[]>{
        return this.apiService.get(`/api/category/parentsForCategories`);
    }
}