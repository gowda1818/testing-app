import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should calculate the sum correctly', () => {
    // Trigger the function
    component.calculateSum();
    // Check if the result is as expected
    expect(component.result).toBe(30);
  });
it("test initial value of num" ,()=>{
  expect(component.num).toBe(10);
} )
it("test the value of num after call changenum" ,()=>{
  component.changeNum();
  expect(component.num).toBe(100);
} )
it("test the value of num after using timer " ,fakeAsync(()=>{
  component.changeAfterTime();
  tick(3000)
  expect(component.num).toBe(200);
} ))
});

