/* =========================================================
   FACILITA FORMOSA — interações
   ========================================================= */

// ---------- Ícones em traço (SVG) ----------
const tracos = {
  cesto:  '<path d="M7 20h34l-4.5 20h-25z"/><path d="M14 20c0-8 4.5-12.5 10-12.5S34 12 34 20"/><path d="M9.5 27.5h29M11 34h26M18 20l2 20M30 20l-2 20"/>',
  pote:   '<path d="M13 17h22v19a5 5 0 01-5 5H18a5 5 0 01-5-5z"/><path d="M15 10h18v7H15z"/><path d="M13 25h22"/><path d="M20 31c2 2 6 2 8 0"/>',
  queijo: '<path d="M6 33L38 15l4 4v15H6z"/><path d="M6 33v7h36v-6"/><circle cx="25" cy="28" r="2.2"/><circle cx="34" cy="24" r="1.6"/><circle cx="17" cy="36.5" r="1.5"/>',
  folha:  '<path d="M9 39C9 21 21 9 40 9c0 19-12 30-31 30z"/><path d="M9 39l21-21M18 30h7M23 25v-6"/>',
  bolsa:  '<path d="M9 19h30l-2.5 21h-25z"/><path d="M17 19c0-7 3-10.5 7-10.5S31 12 31 19"/><path d="M9.8 26h28.4"/><circle cx="24" cy="31" r="2"/>',
  vaso:   '<path d="M17 7h14"/><path d="M19 7c0 6-8 8.5-8 18.5C11 34 16.5 41 24 41s13-7 13-15.5C37 15.5 29 13 29 7"/><path d="M12 24h24M13.5 31h21"/>',
  fruto:  '<circle cx="24" cy="28" r="13"/><path d="M24 15c0-5 3.5-8 8-8"/><path d="M24 15c-2-3-6-4-9-2 2 3 6 4 9 2z"/>',
  novelo: '<circle cx="24" cy="24" r="15"/><path d="M11 17c9 2 17 9 21 20M16 11c6 7 10 15 10 27M38 19c-9 0-17 6-22 18"/><path d="M38 33c3 2 5 5 4 8"/>',
  brinco: '<circle cx="24" cy="8" r="3"/><path d="M24 11v6"/><path d="M24 17l-9 16a9 9 0 0018 0z"/><path d="M19 30h10M17.5 35h13"/>',
  pao:    '<path d="M7 31c0-10 7.5-16 17-16s17 6 17 16v6H7z"/><path d="M17 20l-3 7M25 18l-2 7M33 20l-2 7"/>',
};
const icone = (nome) =>
  `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${tracos[nome]}</svg>`;

// ---------- Dados ----------
const CATEGORIAS = [
  { id: "todos", nome: "Tudo" },
  { id: "alimentos", nome: "Da cozinha" },
  { id: "hortifruti", nome: "Da horta" },
  { id: "artesanato", nome: "Artesanato" },
  { id: "moda", nome: "Pra vestir" },
  { id: "decoracao", nome: "Pra casa" },
];
const ICONE_CATEGORIA = { alimentos: "pote", hortifruti: "folha", artesanato: "cesto", moda: "bolsa", decoracao: "vaso" };
const TONS = ["tom-pequi", "tom-barro", "tom-buriti", "tom-papel"];

// Produtos fictícios de demonstração. Sem número de WhatsApp: o pedido abre o app pra pessoa escolher o contato.
const PRODUTOS_EXEMPLO = [
  { id: 1,  nome: "Mel silvestre do cerrado, 500 g", produtor: "Apiário Exemplo", categoria: "alimentos", preco: 35, icone: "pote" },
  { id: 2,  nome: "Cesto de palha trançado", produtor: "Ateliê Exemplo", categoria: "artesanato", preco: 60, icone: "cesto" },
  { id: 3,  nome: "Queijo minas curado", produtor: "Sítio Exemplo", categoria: "alimentos", preco: 42, icone: "queijo" },
  { id: 4,  nome: "Cesta de verduras da semana", produtor: "Horta Exemplo", categoria: "hortifruti", preco: 28, icone: "folha" },
  { id: 5,  nome: "Bolsa de crochê", produtor: "Crochê Exemplo", categoria: "moda", preco: 85, icone: "bolsa" },
  { id: 6,  nome: "Vaso de cerâmica pintado à mão", produtor: "Ateliê Exemplo", categoria: "decoracao", preco: 55, icone: "vaso" },
  { id: 7,  nome: "Pequi em conserva", produtor: "Sítio Exemplo", categoria: "alimentos", preco: 25, icone: "fruto" },
  { id: 8,  nome: "Tapete de barbante redondo", produtor: "Crochê Exemplo", categoria: "decoracao", preco: 70, icone: "novelo" },
  { id: 9,  nome: "Brinco de capim dourado", produtor: "Ateliê Exemplo", categoria: "moda", preco: 40, icone: "brinco" },
  { id: 10, nome: "Pão de fermentação natural", produtor: "Doceria Exemplo", categoria: "alimentos", preco: 16, icone: "pao" },
  { id: 11, nome: "Doce de leite de tacho", produtor: "Doceria Exemplo", categoria: "alimentos", preco: 18, icone: "pote" },
  { id: 12, nome: "Mudas de cheiro-verde", produtor: "Horta Exemplo", categoria: "hortifruti", preco: 8, icone: "folha" },
];

const QUIZ = [
  { p: "Um cliente manda a foto do comprovante do Pix e pede pra você entregar correndo, porque está com pressa.", r: "golpe", e: "Foto de comprovante se edita fácil. Só entregue depois de ver o valor no app do banco." },
  { p: "Antes de entregar o queijo, você abre o aplicativo do banco e confere que o Pix caiu.", r: "seguro", e: "Isso. O extrato do banco é a única confirmação que vale." },
  { p: "Alguém pede o código de 6 dígitos que chegou por SMS \"pra confirmar seu cadastro na loja\".", r: "golpe", e: "Esse código é do seu WhatsApp. Com ele, clonam sua conta e pedem dinheiro pros seus contatos." },
  { p: "O comprador diz que mandou R$ 200 em vez de R$ 20 e pede pra você devolver a diferença.", r: "golpe", e: "É o golpe do \"Pix a mais\". Quase sempre o valor maior nunca entrou na sua conta." },
  { p: "Você vende pelo WhatsApp Business, com catálogo, horário e um número separado do pessoal.", r: "seguro", e: "Boa prática: passa confiança e protege seu número pessoal." },
  { p: "Um perfil criado há três dias vende celular novo pela metade do preço, só com pagamento adiantado.", r: "golpe", e: "Perfil novo + preço bom demais + pagamento antes = três alarmes de uma vez." },
];

// ---------- Utilidades ----------
const $ = (s, el = document) => el.querySelector(s);
const real = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const escapar = (t) => { const d = document.createElement("div"); d.textContent = t; return d.innerHTML; };

function ler(chave, padrao) { try { return JSON.parse(localStorage.getItem(chave)) ?? padrao; } catch { return padrao; } }
function salvar(chave, valor) { try { localStorage.setItem(chave, JSON.stringify(valor)); } catch { /* sem storage */ } }

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("mostrar");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("mostrar"), 2300);
}

// ---------- Estado ----------
let cadastrados = ler("ff_produtos", []);
let carrinho = ler("ff_carrinho", {});
let categoriaAtiva = "todos";
const todos = () => [...cadastrados, ...PRODUTOS_EXEMPLO];
const acha = (id) => todos().find((p) => String(p.id) === String(id));

// ---------- Menu mobile ----------
$("#menuBtn").addEventListener("click", () => {
  const aberto = $("#menu").classList.toggle("aberto");
  $("#menuBtn").setAttribute("aria-expanded", aberto);
});
document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => {
  $("#menu").classList.remove("aberto");
  $("#menuBtn").setAttribute("aria-expanded", false);
}));

// ---------- Banca ----------
function montarAbas() {
  $("#chips").innerHTML = CATEGORIAS.map((c) =>
    `<button class="aba ${c.id === categoriaAtiva ? "ativo" : ""}" data-cat="${c.id}" aria-pressed="${c.id === categoriaAtiva}">${c.nome}</button>`
  ).join("");
  $("#fCategoria").innerHTML = '<option value="" disabled selected>escolha</option>' +
    CATEGORIAS.filter((c) => c.id !== "todos").map((c) => `<option value="${c.id}">${c.nome}</option>`).join("");
}

$("#chips").addEventListener("click", (e) => {
  const aba = e.target.closest(".aba");
  if (!aba) return;
  categoriaAtiva = aba.dataset.cat;
  montarAbas();
  renderBanca();
});
$("#busca").addEventListener("input", renderBanca);

function renderBanca() {
  const termo = $("#busca").value.trim().toLowerCase();
  const lista = todos().filter((p) =>
    (categoriaAtiva === "todos" || p.categoria === categoriaAtiva) &&
    (!termo || p.nome.toLowerCase().includes(termo) || p.produtor.toLowerCase().includes(termo))
  );
  $("#vazio").hidden = lista.length > 0;
  $("#gradeProdutos").innerHTML = lista.map((p, i) => {
    const larga = i % 5 === 0 && lista.length > 3;   // ritmo: a cada 5, uma etiqueta dupla
    return `
    <article class="etiqueta ${larga ? "etiqueta--larga" : ""}" style="animation-delay:${Math.min(i, 8) * 45}ms">
      <div class="etiqueta__arte ${TONS[i % TONS.length]}">${icone(p.icone)}</div>
      <div class="etiqueta__corpo">
        ${p.novo ? '<span class="etiqueta__selo">acabou de chegar</span>' : ""}
        <span class="etiqueta__cat">${CATEGORIAS.find((c) => c.id === p.categoria).nome}</span>
        <h3>${escapar(p.nome)}</h3>
        <span class="etiqueta__por">feito por <em>${escapar(p.produtor)}</em></span>
        <div class="etiqueta__rodape">
          <span class="preco">${real(p.preco)}</span>
          <button class="btn-add" data-add="${p.id}">+ sacola</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

$("#gradeProdutos").addEventListener("click", (e) => {
  const b = e.target.closest("[data-add]");
  if (!b) return;
  carrinho[b.dataset.add] = (carrinho[b.dataset.add] || 0) + 1;
  atualizarSacola();
  const btn = $("#abrirCarrinho");
  btn.classList.remove("pulo"); void btn.offsetWidth; btn.classList.add("pulo");
  toast("foi pra sacola!");
});

// ---------- Sacola ----------
function abrirSacola(abrir) {
  $("#sacola").classList.toggle("aberta", abrir);
  $("#sombra").hidden = !abrir;
}
$("#abrirCarrinho").addEventListener("click", () => abrirSacola(true));
$("#fecharCarrinho").addEventListener("click", () => abrirSacola(false));
$("#sombra").addEventListener("click", () => abrirSacola(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") abrirSacola(false); });

function itensSacola() {
  Object.keys(carrinho).forEach((id) => { if (!acha(id) || carrinho[id] <= 0) delete carrinho[id]; });
  salvar("ff_carrinho", carrinho);
  return Object.entries(carrinho).map(([id, qtd]) => ({ ...acha(id), qtd }));
}

function atualizarSacola() {
  const itens = itensSacola();
  $("#qtdCarrinho").textContent = itens.reduce((s, i) => s + i.qtd, 0);
  $("#totalCarrinho").textContent = real(itens.reduce((s, i) => s + i.qtd * i.preco, 0));

  if (!itens.length) {
    $("#itensCarrinho").innerHTML = '<p class="sacola__vazia">A sacola tá vazia.<br>Passa na banca e escolhe alguma coisa de alguém daqui.</p>';
    return;
  }
  const grupos = {};
  itens.forEach((i) => (grupos[i.produtor] ??= []).push(i));

  $("#itensCarrinho").innerHTML = Object.entries(grupos).map(([produtor, lista]) => `
    <div class="grupo">
      <h4>${escapar(produtor)}</h4>
      ${lista.map((i) => `
        <div class="item">
          ${icone(i.icone)}
          <div class="item__info">${escapar(i.nome)}<br><small>${real(i.preco)} cada</small></div>
          <div class="qtd">
            <button data-menos="${i.id}" aria-label="Diminuir">−</button>
            <span>${i.qtd}</span>
            <button data-mais="${i.id}" aria-label="Aumentar">+</button>
          </div>
        </div>`).join("")}
      <button class="btn btn-zap" data-zap="${escapar(produtor)}">Pedir no WhatsApp · ${real(lista.reduce((s, i) => s + i.qtd * i.preco, 0))}</button>
    </div>`).join("");
}

$("#itensCarrinho").addEventListener("click", (e) => {
  const mais = e.target.closest("[data-mais]");
  const menos = e.target.closest("[data-menos]");
  const zap = e.target.closest("[data-zap]");
  if (mais) { carrinho[mais.dataset.mais]++; atualizarSacola(); }
  if (menos) { carrinho[menos.dataset.menos]--; atualizarSacola(); }
  if (zap) pedirNoZap(zap.dataset.zap);
});

function pedirNoZap(produtor) {
  const itens = itensSacola().filter((i) => i.produtor === produtor);
  const total = itens.reduce((s, i) => s + i.qtd * i.preco, 0);
  const texto =
    `Oi, ${produtor}! Vi seus produtos no *Facilita Formosa* e queria pedir:\n\n` +
    itens.map((i) => `• ${i.qtd}x ${i.nome} — ${real(i.qtd * i.preco)}`).join("\n") +
    `\n\n*Total: ${real(total)}*\n\nComo a gente combina a entrega e o pagamento?`;
  const numero = itens[0].zap ? "55" + itens[0].zap : "";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
}

// ---------- Calculadora ----------
function calcular() {
  const n = (id) => parseFloat($(id).value) || 0;
  const custo = n("#cMaterial") + n("#cHoras") * n("#cValorHora") + n("#cExtra");
  const el = $("#cResultado");
  el.textContent = real(custo * (1 + n("#cLucro") / 100));
  el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
  setTimeout(() => el.classList.remove("bump"), 250);
}
$("#calcForm").addEventListener("input", calcular);

// ---------- Ficha de cadastro ----------
$("#formCadastro").addEventListener("submit", (e) => {
  e.preventDefault();
  const categoria = $("#fCategoria").value;
  cadastrados.unshift({
    id: "u" + Date.now(),
    nome: $("#fNome").value.trim(),
    produtor: $("#fProdutor").value.trim(),
    categoria,
    preco: parseFloat($("#fPreco").value),
    zap: $("#fZap").value.replace(/\D/g, ""),
    icone: ICONE_CATEGORIA[categoria],
    novo: true,
  });
  salvar("ff_produtos", cadastrados);
  e.target.reset();
  categoriaAtiva = "todos";
  $("#busca").value = "";
  montarAbas();
  renderBanca();
  toast("pendurado na banca!");
  $("#banca").scrollIntoView();
});

// ---------- Teste (quiz) ----------
let qi = 0, respostas = [];
const bilheteOriginal = $("#quizCaixa").innerHTML;

function iniciarQuiz() {
  qi = 0; respostas = [];
  $("#quizCaixa").innerHTML = bilheteOriginal;
  document.querySelectorAll("[data-resposta]").forEach((b) => b.addEventListener("click", () => responder(b.dataset.resposta)));
  $("#quizProxima").addEventListener("click", proxima);
  mostrar();
}

function pontos() {
  $("#quizProgresso").innerHTML = QUIZ.map((_, i) =>
    `<i class="${respostas[i] === true ? "certo" : respostas[i] === false ? "errado" : ""} ${i === qi ? "atual" : ""}"></i>`
  ).join("");
}

function mostrar() {
  const q = QUIZ[qi];
  $("#quizContador").textContent = `situação ${qi + 1} de ${QUIZ.length}`;
  $("#quizPergunta").textContent = q.p;
  $("#quizFeedback").textContent = "";
  $("#quizCarimbo").className = "bilhete__carimbo";
  $("#quizProxima").hidden = true;
  document.querySelectorAll("[data-resposta]").forEach((b) => (b.disabled = false));
  pontos();
}

function responder(r) {
  const q = QUIZ[qi];
  const certo = r === q.r;
  respostas[qi] = certo;
  const carimbo = $("#quizCarimbo");
  carimbo.textContent = q.r === "golpe" ? "GOLPE" : "SEGURO";
  carimbo.className = `bilhete__carimbo ${q.r}`;
  void carimbo.offsetWidth;
  carimbo.classList.add("bate");
  $("#quizFeedback").innerHTML = `<strong>${certo ? "Acertou." : "Quase."}</strong> ${q.e}`;
  document.querySelectorAll("[data-resposta]").forEach((b) => (b.disabled = true));
  const prox = $("#quizProxima");
  prox.hidden = false;
  prox.textContent = qi === QUIZ.length - 1 ? "ver resultado →" : "próxima →";
  pontos();
}

function proxima() {
  qi++;
  if (qi < QUIZ.length) return mostrar();
  const acertos = respostas.filter(Boolean).length;
  const msg = acertos === QUIZ.length ? "Gabaritou. Golpista nenhum passa por você."
    : acertos >= 4 ? "Mandou bem. Dá uma olhada nos alertas pra fechar as brechas."
    : "Melhor reler os alertas — e mandar pra alguém da família também.";
  $("#quizCaixa").innerHTML = `
    <p class="bilhete__contador">seu resultado</p>
    <p class="bilhete__resultado">${acertos}/${QUIZ.length}</p>
    <p class="bilhete__feedback">${msg}</p>
    <div class="bilhete__opcoes">
      <button class="btn btn--tinta" id="refazer">Fazer de novo</button>
      <a class="link-sublinhado" href="#alerta">reler os alertas</a>
    </div>`;
  $("#refazer").addEventListener("click", iniciarQuiz);
}

// ---------- Folder: miniatura + compartilhar ----------
function ajustarCartaz() {
  const c = $(".folder-sec__cartaz");
  $("iframe", c).style.transform = `scale(${c.clientWidth / 1123})`;
}
window.addEventListener("resize", ajustarCartaz);

$("#compartilhar").addEventListener("click", async () => {
  const dados = { title: "Facilita Formosa", text: "A feira de Formosa na palma da mão.", url: location.href.split("#")[0] };
  try {
    if (navigator.share) await navigator.share(dados);
    else { await navigator.clipboard.writeText(dados.url); toast("link copiado!"); }
  } catch { /* cancelado */ }
});

// ---------- Revelar ao rolar ----------
const alvos = document.querySelectorAll(".secao__cabeca, .porque__frase, .porque__lista li, .vender__texto, .cupom, .ficha, .alerta h2, .alerta__lista, .teste__cabeca, .bilhete, .folder-sec__texto");
if ("IntersectionObserver" in window) {
  alvos.forEach((el) => el.classList.add("revela"));
  const obs = new IntersectionObserver((entradas) => entradas.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visivel"); obs.unobserve(en.target); }
  }), { threshold: 0.15 });
  alvos.forEach((el) => obs.observe(el));
}

// ---------- Início ----------
montarAbas();
renderBanca();
atualizarSacola();
calcular();
iniciarQuiz();
ajustarCartaz();
