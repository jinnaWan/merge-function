export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedCollection: number[] = [];
    let i = 0, j = 0, k = 0;
  
    while (i < collection1.length || j < collection2.length || k < collection3.length) {
      // Find the minimum value, handling collection3's reverse order:
      const minValue = Math.min(
        i < collection1.length ? collection1[i] : Infinity,
        j < collection2.length ? collection2[j] : Infinity,
        k < collection3.length ? collection3[collection3.length - 1 - k] : Infinity
      );
  
      // Add all occurrences of the minimum value to the merged collection
      while (i < collection1.length && collection1[i] === minValue) {
        mergedCollection.push(minValue);
        i++;
      }
      while (j < collection2.length && collection2[j] === minValue) {
        mergedCollection.push(minValue);
        j++;
      }
      while (k < collection3.length && collection3[collection3.length - 1 - k] === minValue) {
        mergedCollection.push(minValue);
        k++;
      }
    }
  
    return mergedCollection;
}
