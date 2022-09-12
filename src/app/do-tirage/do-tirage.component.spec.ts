import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTirageComponent } from './do-tirage.component';

describe('DoTirageComponent', () => {
  let component: DoTirageComponent;
  let fixture: ComponentFixture<DoTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
