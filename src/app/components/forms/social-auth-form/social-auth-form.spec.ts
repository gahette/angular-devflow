import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthForm } from './social-auth-form';

describe('SocialAuthForm', () => {
  let component: SocialAuthForm;
  let fixture: ComponentFixture<SocialAuthForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAuthForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAuthForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
