import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudanzaComponent } from './mudanza.component';

describe('MudanzaComponent', () => {
  let component: MudanzaComponent;
  let fixture: ComponentFixture<MudanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
