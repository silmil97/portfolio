
/*
The code below is sohorter but would be harder to read
function handleCalculation(calc) {
    return calc.split(/(?=[-+])/).map(
        item => item.split('x').map(
            item => item.split('÷')
        ).map(
            item => item.reduce(
                (previousValue, currentValue) => previousValue / currentValue
            )
        ).reduce(
            (previousValue, currentValue) => previousValue * currentValue
        )
    ).reduce(
        (previousValue, currentValue) => +previousValue + +currentValue
    )
}*/



export function handleCalculation(calc) {
    //forms an array with the string split of every occurnce of + and -
    let step1 = calc.split(/(?=[-+])/);
    //in the new array every item is wrapped inside another array and split at the occurence of x
    let step2 = step1.map( item => item.split('x'));
    //inside every new array all items are wrapped inside a new array and split at evry occurence of ÷
    let step3 = step2.map(item => item.map(item1 => item1.split('÷')));
    //all the smallest arrays if there is a division it will take place otherwise the array disappears
    let step4 = step3.map(item => item.map(item1 => item1.reduce((previousValue, currentValue) => previousValue / currentValue)));
    //now all the multiplactions happen and another instance of the arrays disappear
    let step5 = step4.map(item => item.reduce((previousValue, currentValue) => previousValue * currentValue ));
    //adds up the remaining values
    let step6 = step5.reduce((previousValue, currentValue) => +previousValue + +currentValue);
    return step6;
}

export const checkDot = (string) => {
    let arr = string.split(/(?=[-+÷x])/);
    let lastElement = arr[arr.length - 1];

    return lastElement.includes('.');

}

export const display = () => { 
    return document.getElementById('display').innerHTML;
}



