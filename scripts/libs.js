function sleep(millisegundos) {
  var inicio = new Date().getTime();
  while ((new Date().getTime() - inicio) < millisegundos);
}