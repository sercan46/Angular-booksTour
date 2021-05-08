import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPageDetailListComponent } from './book-page-detail-list.component';

describe('BookPageDetailListComponent', () => {
  let component: BookPageDetailListComponent;
  let fixture: ComponentFixture<BookPageDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPageDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPageDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
