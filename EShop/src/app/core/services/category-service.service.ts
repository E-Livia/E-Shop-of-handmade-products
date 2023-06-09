import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CategoryServiceService {
    private selectedCategorySubject = new BehaviorSubject<string>('');
    selectedCategory$ = this.selectedCategorySubject.asObservable();

    setSelectedCategory(category: string) {
        this.selectedCategorySubject.next(category);
    }
}