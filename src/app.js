function generarDominios() {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const extensions = ['.com', '.net', '.io', '.us'];

  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // limpiar lista antes de generar

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {

          let dominio = pronoun[i] + adj[j] + noun[k] + extensions[l];

          let li = document.createElement("li");
          li.textContent = dominio;

          lista.appendChild(li);
        }
      }
    }
  }
}