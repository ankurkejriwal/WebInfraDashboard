import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlRedirectsComponent } from './url-redirects.component';

describe('UrlRedirectsComponent', () => {
  let component: UrlRedirectsComponent;
  let fixture: ComponentFixture<UrlRedirectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlRedirectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlRedirectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
