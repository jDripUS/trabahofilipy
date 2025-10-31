// script.js - lógica da calculadora de juros compostos
function calcular() {
  const capitalEl = document.getElementById("capital");
  const taxaEl = document.getElementById("taxa");
  const tempoEl = document.getElementById("tempo");
  const resultado = document.getElementById("resultado");

  const capital = parseFloat(capitalEl.value);
  const taxa = parseFloat(taxaEl.value) / 100; // valor em decimal (ex: 2% -> 0.02)
  const tempo = parseInt(tempoEl.value, 10);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    resultado.innerHTML = `<p class="erro">⚠️ Preencha todos os campos corretamente.</p>`;
    return;
  }

  // Montante M = C * (1 + i)^t
  const montante = capital * Math.pow(1 + taxa, tempo);
  const lucro = montante - capital;

  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p>💰 Montante final: <strong>R$ ${montante.toFixed(2)}</strong></p>
    <p>📊 Lucro obtido: <strong>R$ ${lucro.toFixed(2)}</strong></p>
  `;
}

// Permite acionar o cálculo ao pressionar Enter em qualquer campo
function attachEnterKey() {
  const fields = ["capital", "taxa", "tempo"];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        calcular();
      }
    });
  });
}

// Ao carregar a página, liga os handlers
document.addEventListener("DOMContentLoaded", () => {
  // conecta o botão (se existir)
  const btn = document.getElementById("btnCalcular");
  if (btn) btn.addEventListener("click", calcular);

  attachEnterKey();
});
