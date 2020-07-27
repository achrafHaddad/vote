import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSondageComponent } from './vote-sondage.component';

describe('VoteSondageComponent', () => {
  let component: VoteSondageComponent;
  let fixture: ComponentFixture<VoteSondageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSondageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
