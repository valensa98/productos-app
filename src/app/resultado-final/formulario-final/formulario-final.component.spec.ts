import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinalComponent } from './formulario-final.component';

describe('FormularioFinalComponent', () => {
  let component: FormularioFinalComponent;
  let fixture: ComponentFixture<FormularioFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
