function retornarNomes(listaNomes) {
  var indice = Math.floor(Math.random() * listaNomes.length);
  var nomeSelecionado = listaNomes[indice];

  listaNomes.splice(indice, 1);
  return nomeSelecionado;
}

function inserirNomes() {
  var NomesAlunos = [
    "André Oleari", "Antonio Paulo", "Antonio Rafael", "Emily Mayara", 
    "Estelit Patricia", "Francisco Caio", "Jasmin Miranda", 
    "Jheniffer da Silva", "João Miguel", "João Pedro", "João Victor", 
    "Josias Rodrigues", "Keterlli Oliveira", "Lian Silva", "Luiz Silva", 
    "Maria Rita", "Mateus Rodrigues", "Paulo Victor", "Weldison Gonzaga", 
    "Vitor Soares", "Samya Tonielly", "Vagner Ribeiro"
  ];

  var nomesSemana = [];

  for (var i = 0; i < 5; i++) {
    if (NomesAlunos.length > 0) {
      var nomeSelecionado = retornarNomes(NomesAlunos);
      nomesSemana.push(nomeSelecionado);
    } else {
      nomesSemana.push("Sem nomes disponíveis");
    }
  }

  document.getElementById("nome1").innerHTML = nomesSemana[0] || "Sem nomes disponíveis";
  document.getElementById("nome2").innerHTML = nomesSemana[1] || "Sem nomes disponíveis";
  document.getElementById("nome3").innerHTML = nomesSemana[2] || "Sem nomes disponíveis";
  document.getElementById("nome4").innerHTML = nomesSemana[3] || "Sem nomes disponíveis";
  document.getElementById("nome5").innerHTML = nomesSemana[4] || "Sem nomes disponíveis";
}



