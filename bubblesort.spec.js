describe("bubbleSort", function() {

  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough()
  })

  it('calls swap more than once', function() {
    window.bubbleSort([4, 9, 46, 2])
    expect(window.swap.calls.count()).toEqual(3)
  })

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles an array with one element", function() {
    expect(bubbleSort([3])).toEqual([3]);
  });

  it("handles an array with many elements", function() {
    expect(bubbleSort([4, 9, 46, 2])).toEqual([2, 4, 9, 46]);
    expect(bubbleSort([55, 32, 11, 5, 5, 3, 2])).toEqual([
      2,
      3,
      5,
      5,
      11,
      32,
      55
    ]);
    expect(bubbleSort([719, 660, 680, 637, 394, 186, 183])).toEqual([
      183,
      186,
      394,
      637,
      660,
      680,
      719
    ]);
  });
});
