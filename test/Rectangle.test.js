const assert = require('assert');
const Rectangle = require('../Rectangle')
let rectangle = new Rectangle

describe('Rectangle', () => {
  // give the test a label using it
  it('is Rectangle a square ', () => {
    
    assert.strictEqual(rectangle.isSquare(5,5), true);
    assert.strictEqual(rectangle.isSquare(5,6), false)
 });
 it ('is the proper area returned', () =>{
   assert.strictEqual(rectangle.getArea(13,7) ,91)
 })
it ( 'is rectangle return the good perimeter', () => {
  assert.strictEqual(rectangle.getPerimeter(13,7),40)
})
  
});