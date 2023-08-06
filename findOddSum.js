function getSumOfAnArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];

        console.log(index, element);
    }

}
const myNumbers = [1, 2, 3, 4, 5];

getSumOfAnArray(myNumbers);