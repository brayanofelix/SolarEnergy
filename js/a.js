function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return null;
    }

    let maiorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}

const numeros = [10, 5, 8, 21, 3];
const maior = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maior);