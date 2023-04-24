import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentInRootComponent } from './component-in-root.component';

describe('ComponentInRootComponent', () => {
  let component: ComponentInRootComponent;
  let fixture: ComponentFixture<ComponentInRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentInRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
