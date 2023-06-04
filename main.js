function retornarNomes(listaNomes) {
  var indice = Math.floor(Math.random() * listaNomes.length);
  var nomeSelecionado = listaNomes[indice];

  listaNomes.splice(indice, 1);
  return nomeSelecionado;
}

function inserirNomes() {
  var NomesAlunos = [
    "André Oleari", "Antonio Paulo", "Antonio Rafael", "Emily Mayara", 
    "Estelit Patricia", "Francisco Caio",  
    "Jheniffer da Silva", "João Pedro",
    "Josias Rodrigues", "Keterlli Oliveira", "Luiz Silva", 
    "Mateus Rodrigues","Weldison Gonzaga", 
    "Vagner Ribeiro","Jackson Soeiros"
  ];

  var nomesSemana = [];

  var ultimaExibicao = localStorage.getItem("ultimaExibicao");
  var hoje = new Date().getTime();
  
  if (ultimaExibicao && (hoje - ultimaExibicao) < 2.5 * 24 * 60 * 60 * 1000) {
    nomesSemana = JSON.parse(localStorage.getItem("nomesSemana")) || [];
  
  }else {

    for (var i = 0; i < 5; i++) {
      if (NomesAlunos.length > 0) {
        var nomeSelecionado = retornarNomes(NomesAlunos);
        nomesSemana.push(nomeSelecionado);
      } else {
        nomesSemana.push("Sem nomes disponíveis");
      }
    }

    localStorage.setItem("nomesSemana", JSON.stringify(nomesSemana));
    localStorage.setItem("ultimaExibicao", hoje);
  }

  document.getElementById("nome1").innerHTML = nomesSemana[0] || "Sem nomes disponíveis";
  document.getElementById("nome2").innerHTML = nomesSemana[1] || "Sem nomes disponíveis";
  document.getElementById("nome3").innerHTML = nomesSemana[2] || "Sem nomes disponíveis";
  document.getElementById("nome4").innerHTML = nomesSemana[3] || "Sem nomes disponíveis";
  document.getElementById("nome5").innerHTML = nomesSemana[4] || "Sem nomes disponíveis";
}
