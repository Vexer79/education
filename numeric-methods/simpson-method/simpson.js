(function () {
    const simpsonMethod = function (func, n, [a, b]) {
        const resultTable = {};
        const h = (b - a) / n;
        let xI = a;
        let result = func(a) + func(b);
        let resultEven = 0;
        let resultOdd = 0;
        xI += h;
        for (let i = 1; i < n; i++) {
            if (i % 2 == 0) {
                resultEven += func(xI);
            } else {
                resultOdd += func(xI);
            }
            resultTable[i] = { xI: xI, yI: func(xI) };
            xI += h;
        }
        console.log(resultTable);
        return (h / 3) * (result + 4 * resultOdd + 2 * resultEven);
    };

    console.log(
        simpsonMethod(
            (x) => {
                return 1 / (1 + Math.pow(x, 2));
            },
            10,
            [0, 1]
        )
    );
})();
