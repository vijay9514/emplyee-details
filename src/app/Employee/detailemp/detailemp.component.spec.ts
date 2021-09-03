import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailempComponent } from './detailemp.component';

describe('DetailempComponent', () => {
  let component: DetailempComponent;
  let fixture: ComponentFixture<DetailempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
