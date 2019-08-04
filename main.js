// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

const integers = [2, 4, 0, 100, 4, 11, 2602, 36]
// should return 11

function findOutlier(numbers) {
    const evens = []
    const odds = []

    numbers.forEach(i => {
        if (i % 2 === 0) {
            evens.push(i)
        } else {
            odds.push(i)
        }
    })

    if (evens.length === 1) {
        console.log(evens[0])
    } else {
        console.log(odds[0])
    }
}

findOutlier(integers);