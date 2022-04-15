let fibonacci = (num = 1) => {
    let series = [1, 1];
    for (let i = 2; i < num; i++) {
    let a = series[i - 1];
    let b = series[i - 2];
    series.push(a + b);
    };
    return series[num - 1];
};
console.log(fibonacci(43));
