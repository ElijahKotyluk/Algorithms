const array = [1, 5 , 2, 6, 4, 7, 10, 54, 220, 39]

function swap(array, i, j) {
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function bubbleSwap(array) {
    for(i = 0; i < array.length; i++) {
        for(j = 1; j < array.length; j++) {
            if(array[j-1] > array[j]) {
                swap(array, j-1, j)
            }
        }
    }
    console.log(array)
}

bubbleSwap(array);
