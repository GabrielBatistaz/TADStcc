import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolhaAcessoPage } from './escolha-acesso.page';

describe('EscolhaAcessoPage', () => {
  let component: EscolhaAcessoPage;
  let fixture: ComponentFixture<EscolhaAcessoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscolhaAcessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
