// Напишите функцию getDays, которая принимает год и месяц, а возвращает
// количество дней в месяце
// getDays( 2021 , 4) //30
// getDays( 2021 , ‘April’) //30

function getDays(year, month) {
    const nameMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    if (month < 1 || month > 12 || typeof year !== 'number' || year < 1 || !year || !month) {
        return 'Invalid input data'
    }

    if (typeof month === 'string') {
        month = nameMonth.indexOf(month.toLowerCase()) + 1;
        if (month === 0) {
            return 'Invalid input data'
        }
    }
    return new Date(year, month, 0).getDate();


}

module.exports = { getDays };
