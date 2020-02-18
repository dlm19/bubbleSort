describe('Swap', function() {
    it('takes two number inputs and returns them in numerical order', function() {
        expect(swap(8,2)).toEqual(2,8)
        expect(swap(2,9)).toEqual(2,9)
        expect(swap(3,3)).toEqual('you should not have two of the same number')
    })
})

describe('Bubble Sort', function() {
    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough();
    })
   it('handles an empty array', function() {
      expect(bubbleSort([])).toEqual([])
      ;
      expect(window.swap.calls.count()).toEqual(0)
   });
   it('handles a single item in an array', function() {
       expect(bubbleSort([4])).toEqual([4])
       expect(window.swap.calls.count()).toEqual(0);
   });
   it('handles an array with multiple items', function() {
       expect(bubbleSort([5,8,2,9,6])).toEqual([2,5,6,8,9])
       expect(window.swap.calls.count()).toEqual(9);
    // or might be 10
   })
   it('handles a longer array with multiple items', function() {
       expect(bubbleSort([33, 99, 50, 1, 15, 72, 98, 45, 4, 68]))
       expect(window.swap.calls.count()).toEqual(44);
    // or might be 45
   })
});
