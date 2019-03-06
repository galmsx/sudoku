module.exports = function solveSudoku(matrix) {

    let solved = false;

    function test(compared, matrix, i, j) {
        //Проверяет, можно ли поставить число

        //в строке
        for (let k = 0; k < matrix[i].length; k++)
            if (compared == matrix[i][k]) return false;

        // в столбце
        for (let k = 0; k < matrix.length; k++)
            if (compared == matrix[k][j]) return false;

        //в квадрате
        let row = Math.floor(i / 3) * 3;
        let col = Math.floor(j / 3) * 3;
        for (let k = row; k < row + 3; k++)
            for (let n = col; n < col + 3; n++)
                if (compared == matrix[k][n]) return false;


        return true;
    }

    function solve(matrix, index) {
        if (index > 80) {
            solved = true;
            return;
        }
        let i = Math.floor(index / 9);
        let j = index % 9;

        if (matrix[i][j])
            return solve(matrix, index + 1);
        
        for (let varik = 1; varik < 10; varik++) {
            if (test(varik, matrix, i, j)) {
                matrix[i][j] = varik;
                solve(matrix, index + 1);
            }
        }
        if (!solved) matrix[i][j] = 0;
    }
    solve(matrix, 0);
    return matrix;
}