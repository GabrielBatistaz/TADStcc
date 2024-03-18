import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogarUserPage } from './logar-user.page';

describe('LogarUserPage', () => {
  let component: LogarUserPage;
  let fixture: ComponentFixture<LogarUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
