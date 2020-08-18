// Iteradores => cualquier objeto que implementa el protocolo de iterador
// solo entregaun dato a la vez
let iterador = {
  currentValue: 1,
  next(){
    let resultado = {
      value: null,
      done: false
    };
    if(this.currentValue > 0 && this.currentValue <= 5){
      resultado = { value: this.currentValue, done: false};
      this.currentValue += 1;
    }else{
      result = {done: true};
    }
    return resultado;
  }
};
let item = iterador.next();
while(!item.done){
  console.log(item.value);
  item = iterador.next();
}
