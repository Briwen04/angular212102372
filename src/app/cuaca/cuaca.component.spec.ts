import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuacaComponent } from './cuaca.component';

describe('CuacaComponent', () => {
  let component: CuacaComponent;
  let fixture: ComponentFixture<CuacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuacaComponent]
    });
    fixture = TestBed.createComponent(CuacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
