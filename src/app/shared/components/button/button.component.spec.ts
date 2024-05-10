import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.btnName = 'Click Me';
    component.href = 'https://example.com';
    fixture.detectChanges();
  });

  it('should create a button element with proper attributes when href is defined', () => {
    const buttonElement = fixture.nativeElement.querySelector('a');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.getAttribute('href')).toBe('https://example.com');
    expect(buttonElement.textContent).toContain('Click Me');
    expect(buttonElement.classList).toContain('bg-violet');
  });

  it('should create a button element with proper attributes when href is not defined', () => {
    component.href = undefined;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Click Me');
    expect(buttonElement.classList).toContain('bg-violet');
    // Add more assertions as needed
  });
});
