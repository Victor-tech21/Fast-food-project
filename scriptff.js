document.addEventListener("DOMContentLoaded", function () {
    // Mapeamento dos combos
    const combos = {
        comboUm: { img: "assets/combo dois.webp", preco: "R$ 25,90" },
        comboDois: { img: "assets/combo um.png", preco: "R$ 29,90" },
        comboTres: { img: "assets/combotres.jpg", preco: "R$ 32,50" }
    };

    // Adicionando eventos aos botões
    document.getElementById("botaoUm").addEventListener("click", function () {
        escolherCombo("comboUm");
    });

    document.getElementById("botaoDois").addEventListener("click", function () {
        escolherCombo("comboDois");
    });

    document.getElementById("botaoTres").addEventListener("click", function () {
        escolherCombo("comboTres");
    });

    function escolherCombo(combo) {
        const comboSelecionado = combos[combo];

        if (comboSelecionado) {
            let imagemCombo = document.getElementById("imagemCombo");
            let precoTexto = document.getElementById("preco");

            imagemCombo.src = comboSelecionado.img;
            imagemCombo.style.display = "block";
            precoTexto.innerText = "Preço: " + comboSelecionado.preco;
        }
    }
});
