const getTabla = (n, max = 10) => { // Función con param predeterminado (Ver en PPT "JS Contemporáneo")
    if (!n) {
        throw "No se puede hacer la tabla de un número indefinido";
    };
    return iota(max)
           .map(i => `${n} x ${i} = ${n * i}`)
           .toString()
           .replaceAll(",", "\n");           ;
}

// 5 --> [1,2,3,4,5]
const iota = max => Array.from(Array(max).keys()).map(x => x + 1);

// Se va a exportar un objeto con una sola función (a futuro pudiera haber más, ya queda escalable)
module.exports = {
    getTabla /* Significa que el campo tiene como valor una variable/const del mismo nombre  */ 
};

/*
ES5 (antes):
  {
    getTabla: getTabla
  }

ES6 (forma moderna):
  {
    getTabla
  }
*/