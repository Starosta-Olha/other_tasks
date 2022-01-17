// Написать функцию every, которая будет принимать первым аргументом массив, а
// вторым функцию колбэк(которая будет принимать каждый элемент массива и
// возвращать true либо false). Результатом функции должно быть логическое
// выражение true/false в зависимости от того, выполняется ли условие для каждого
// из элементов.

function every(arr, cb) {
    let result = true;

    if (!Array.isArray(arr) || arr.length === 0 || typeof cb !== 'function') {
        return false;
    }
    arr.forEach((num) => {
        result = result && cb(num)
    })

    return result;
}

module.exports = { every };