import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Resultadobusca } from './resultadobusca';

describe('Resultadobusca', () => {
  let component: Resultadobusca;
  let fixture: ComponentFixture<Resultadobusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadobusca],
    }).compileComponents();

    fixture = TestBed.createComponent(Resultadobusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
