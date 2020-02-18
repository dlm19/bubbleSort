describe("split", function() {
  it('is able to split an array in two halves', function(){
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  })
  it('can handle odd-length arrays', function(){
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  })
})

describe("merge", function() {
  beforeEach(() => {
    spyOn(Array.prototype, 'sort').and.callThrough();
  })

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([5,6,7,8], [1,2,3,4])).toEqual([1,2,3,4,5,6,7,8])
  })

  it('is able to merge odd-length arrays into one sorted array', function(){
    expect(merge([1,2,3,4,5],[6,7,8])).toEqual([1,2,3,4,5,6,7,8])
  })

  it('should not use Array.sort()', function(){
    merge([1,2,3,4], [5,6,7,8])
    expect(Array.prototype.sort.calls.any()).toBe(false)
  })
})

describe("mergeSort", function() {
  beforeEach(() => {
    spyOn(Array.prototype, 'sort').and.callThrough();
  })

  it('handles an empty array', function(){
    expect(mergeSort([])).toEqual([])
  })

  it('handles an array with a single item', function(){
    expect(mergeSort([1])).toEqual([1])
  })

  it('handles an array with multiple items', function(){
    expect(mergeSort([4,3,2,1])).toEqual([1,2,3,4])
    // expect(mergeSort([6, 8, 4, 3, 12, 532, 5, 1])).toEqual([1, 3, 4, 5, 6, 8, 12, 532])
  })

  it('should not use Array.sort()', function(){
    mergeSort([5,7,2,1])
    expect(Array.prototype.sort.calls.any()).toBe(false)
  })
})
