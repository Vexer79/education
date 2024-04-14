(function () {
    const trapezeMethod = function (func, n, [a, b]) {
        const resultTable = {};
        const h = (b - a) / n;
        let xI = a;
        let result = (func(a) + func(b)) / 2;
        resultTable[0] = { xI: xI, yI: result };
        xI += h;
        for (let i = 1; i < n; i++) {
            result += func(xI);
            resultTable[i] = { xI: xI, yI: func(xI) };
            xI += h;
        }
        console.log(resultTable);
        return result * h;
    };

    console.log(
        trapezeMethod(
            (x) => {
                return 1 / (1 + Math.pow(x, 2));
            },
            10,
            [0, 1]
        )
    );
})();
