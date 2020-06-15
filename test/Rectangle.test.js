const assert = require('assert');
const Rectangle = require('../Rectangle')


describe('Rectangle', () => {
  // give the test a label using it
  it('is Rectangle a square ', () => {
    
    assert.strictEqual(new Rectangle(5,5).isSquare(), true);
    assert.strictEqual(new Rectangle(5,6).isSquare(), false)
 });
 it ('get area', () =>{
   assert.strictEqual(new Rectangle(13,7).getArea(),91)
 })
it ( 'get perimeter', () => {
  assert.strictEqual(new Rectangle(13,7).getPerimeter(),40)
})
  
});