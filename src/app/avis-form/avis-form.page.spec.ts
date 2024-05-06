import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisFormPage } from './avis-form.page';

describe('AvisFormPage', () => {
  let component: AvisFormPage;
  let fixture: ComponentFixture<AvisFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvisFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
