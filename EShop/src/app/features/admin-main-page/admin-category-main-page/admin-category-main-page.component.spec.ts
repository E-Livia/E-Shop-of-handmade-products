import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryMainPageComponent } from './admin-category-main-page.component';

describe('AdminCategoryMainPageComponent', () => {
  let component: AdminCategoryMainPageComponent;
  let fixture: ComponentFixture<AdminCategoryMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
