exports.Numbers = function (array) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    suma = 0;
    
    for (let i = 0; i < array.lenght; i++){
        suma += array[i];
    }
    return suma;
}
