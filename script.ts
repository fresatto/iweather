// Função para verificar se existem dados na seção
function verificarDadosNaSecao() {
  console.log("Mudou...");
  const section = document.querySelector(".flex-row.voteContainer");

  if (!section) {
    console.log("Section not found.");
    return;
  }

  if (section.children.length > 0) {
    const votes = section.querySelectorAll(".card--flip");

    console.log("VOTOS", votes);
  } else {
    console.log("Nenhum dado encontrado na seção.");
  }
}

// Cria um observer para monitorar mudanças no DOM
const observer = new MutationObserver((mutationsList, observer) => {
  // Sempre que houver uma mudança, verifica os dados na seção
  verificarDadosNaSecao();
});

// Inicia a observação do body para mudanças em toda a árvore de elementos
observer.observe(document.body, { childList: true, subtree: true });

// Verifica inicialmente ao carregar o script
verificarDadosNaSecao();
