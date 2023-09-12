export function getMergeSortAnimations(array){
    const animations=[];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations){
    if(startIdx === endIdx) return ;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}   

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;
    while(i <= middleIdx && j <= endIdx){
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        else{
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while(i<=middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j<=endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

// ----------------------- BUBBLE SORT ----------------------------------

export function getBubbleSortAnimations(array) {
    const animations = [];
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1, false]);
  
        if (array[j] > array[j + 1]) {
          animations.push([j, j + 1, true]);
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
        animations.push([j, j + 1, false]);
      }
    }  
    return animations;
}

// ------------------------ QUICK SORT ALGORITHM -----------------------------------------

export function getQuickSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    function quickSort(arr, low, high) {
      if (low < high) {
        const pivotIdx = partition(arr, low, high);
        quickSort(arr, low, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, high);
      }
    }
    function partition(arr, low, high) {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        animations.push([j, high, false]);
  
        if (arr[j] <= pivot) {
          i++;
          animations.push([i, j, true]);
  
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        animations.push([i + 1, high, false]);
      }
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
  
      animations.push([i + 1, high, true]);
      return i + 1;
    }
    quickSort(array, 0, n - 1);
    return animations;
}
  
// ------------------------------- HEAP SORT ALGORITHM -----------------------------------------

export function getHeapSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    function heapSort(arr) {
      buildMaxHeap(arr);
  
      for (let i = n - 1; i >= 0; i--) {
        animations.push([0, i, false]);
        swap(arr, 0, i);
        animations.push([0, i, true]);
  
        heapify(arr, i, 0);
      }
    }
  
    function buildMaxHeap(arr) {
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }
    }
  
    function heapify(arr, size, rootIdx) {
      let largest = rootIdx;
      const left = 2 * rootIdx + 1;
      const right = 2 * rootIdx + 2;
  
      if (left < size && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < size && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== rootIdx) {
        animations.push([rootIdx, largest, false]);
        swap(arr, rootIdx, largest);
        animations.push([rootIdx, largest, true]);
  
        heapify(arr, size, largest);
      }
    }
  
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    heapSort(array);
  
    return animations;
}

// ---------------------------------- INSERTION SORT ----------------------------------

export function getInsertionSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    function insertionSort(arr) {
      for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
  
        while (j >= 0 && arr[j] > key) {
          animations.push([j, j + 1, false]);
          arr[j + 1] = arr[j];
          animations.push([j, j + 1, true]);
          j--;
        }
  
        arr[j + 1] = key;
      }
    }
  
    insertionSort(array);
  
    return animations;
}

//------------------------------------- SELECTION SORT ---------------------------------------------

export function getSelectionSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    function selectionSort(arr) {
      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
  
        for (let j = i + 1; j < n; j++) {
          animations.push([j, minIdx, false]);
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
  
        if (minIdx !== i) {
          animations.push([i, minIdx, true]);
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
        }
      }
    }
  
    selectionSort(array);
  
    return animations;
}
