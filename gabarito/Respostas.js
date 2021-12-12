const pokedex = require("../data");
//Filter
//Primeira questao
function procurarTipo(tipo) {
  return pokedex.filter(f => f.types.some(e => e.type === tipo))
}
//Segunda questao
function maisFortes(numero) {
  return pokedex.filter(e => e.stats.every(e => e.base_stat >= numero))
}
//Terceira questao 
function doisTipos() {
  return pokedex.filter(e => e.types.length > 1)
}
//Map
//Primeira questao
function transformarString() {
  return pokedex.map(e => e.name).join(', ')
}
//Segunda questao
function nameStatusValor(status) {
  return pokedex.map(e => {
    const teste = e.stats.find(e => e.name === status)
    return `${e.name}, ${teste.name}: ${teste.base_stat}`
  })
}
//Terceira questao
function novoFormato() {
  return pokedex.map(e => {
    return {
      name: e.name,
      tipos: e.types.map(e => e.type),
      statusMaisForte: e.stats.sort((a, b) => b.base_stat - a.base_stat)[0].name,
    }
  })
}
//Reduce
//Primeira questao
function statusMaisForte(status) {
  return pokedex.reduce((a, b) => {
    if (a.stats.find(e => e.name === status).base_stat < b.stats.find(e => e.name === status).base_stat) return b
    return a
  })
}
//Segunda questao
function procurarTipoReduce(tipo) {
  return pokedex.reduce((a, b) => {
    if (b.types.some(e => e.type === tipo)) a.push(b)
    return a
  }, [])
}
//Terceira questao
function fichaPokedex() {
  return (pokedex.reduce((a, b) => {
    const maisForte = b.stats.sort((a, b) => b.base_stat - a.base_stat)[0]
    const maisFraco = b.stats.sort((a, b) => a.base_stat - b.base_stat)[0]
    a[b.name] = {
      tipo: b.types.map(e => e.type),
      maisForte: { [maisForte.name]: maisForte.base_stat },
      MaisFraco: { [maisFraco.name]: maisFraco.base_stat }
    }
    return a
  }, {}))
}