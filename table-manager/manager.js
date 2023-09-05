const get_tabla = (n, max = 10) => {
    /*es5 no es moderna
    if (!max){
        max = 10;
    }
    */
    if (!n) {
        throw "no hay n";
    };
    return iota(max).map(x => `${n} x ${x} = ${n * x}\n`);
}

const iota = (max = 10) => Array.from(Array(max).keys()).map(x => x + 1);

module.exports = {
    get_tabla /*esto significa get_tabla:get_tabla*/ 
};
