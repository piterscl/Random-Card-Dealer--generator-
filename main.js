
window.onload = () => {
  document.querySelector('.card').classList.add(randomepinta());
  document.querySelector('.card').innerHTML = randomenumero();
}

let randomepinta = () => { 
    let pintas = ["diamante","espada","corazon","trebol",];
    let indexpintas = Math.floor(Math.random() * pintas.length);

    return pintas[indexpintas];
}

let randomenumero = () => {
  let numeros = ["A","2","3","4","5","6","7","8","9","10","K","Q","K",];
  let indexnumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexnumeros];
}