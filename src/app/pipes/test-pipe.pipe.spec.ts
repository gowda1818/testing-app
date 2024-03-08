import { TestPipePipe } from './test-pipe.pipe';

describe('TestPipePipe', () => {
  // it('create an instance', () => {
  //   const pipe = new TestPipePipe();
  //   expect(pipe).toBeTruthy();
  // });

  it("tets test pipe value" , ()=>{
    let pipe = new TestPipePipe();
    expect(pipe.transform(4)).toBe(16);
  })

  it("" , ()=>{
    let pipe = new TestPipePipe();
    expect(pipe.transform('string')).toBe('not a number')
  })
  

});
