import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPageDetailComponent } from './books-page-detail.component';

describe('BooksPageDetailComponent', () => {
  let component: BooksPageDetailComponent;
  let fixture: ComponentFixture<BooksPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
