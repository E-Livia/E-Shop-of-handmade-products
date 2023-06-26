import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorialsComponent } from './admin-tutorials.component';

describe('AdminTutorialsComponent', () => {
  let component: AdminTutorialsComponent;
  let fixture: ComponentFixture<AdminTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
