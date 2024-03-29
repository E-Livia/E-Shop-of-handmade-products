import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMainPageComponent } from './category-main-page.component';

describe('CategoryMainPageComponent', () => {
  let component: CategoryMainPageComponent;
  let fixture: ComponentFixture<CategoryMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
