    function mostrar(texto) {
      let p = document.createElement("p");
      p.textContent = texto;
      document.getElementById("saida").appendChild(p);
      console.log(texto);
    }

    function lanchonete() {
      document.getElementById("saida").innerHTML = "";

      let senha;
      do {
        senha = prompt("Digite a senha:");
        if (senha !== "1234") {
          alert("Senha incorreta!");
          mostrar("Senha incorreta!");
        }
      } while (senha !== "1234");
      alert("Acesso permitido!");
      mostrar("Acesso permitido!");

      const menu =
        "1 - Hambúrguer - R$ 15,00\n" +
        "2 - Pizza - R$ 20,00\n" +
        "3 - Refrigerante - R$ 6,00\n" +
        "4 - Batata Frita - R$ 10,00\n" +
        "0 - Finalizar\n\nEscolha o que você quer pegar:";

      let subtotal = 0;
      let quantidade = 0;
      let qtdProduto = [0, 0, 0, 0, 0];
      let opcao = -1;


      while (opcao !== 0) {
        opcao = Number(prompt(menu));
        let preco = 0;
        let nome = "";

        switch (opcao) {
          case 1: nome = "Hambúrguer"; preco = 15; break;
          case 2: nome = "Pizza"; preco = 20; break;
          case 3: nome = "Refrigerante"; preco = 6; break;
          case 4: nome = "Batata Frita"; preco = 10; break;
          case 0: break;
          default:
            alert("Opção inválida!");
            mostrar("Opção inválida!");
            continue;
        }

        if (opcao === 0) {
          break;
        }

        subtotal += preco;
        quantidade++;
        qtdProduto[opcao]++;
        alert(nome + " adicionado!");
        mostrar(nome + " adicionado!");
      }

      for (let i = 1; i <= quantidade; i++) {
        mostrar("Produto " + i + " registrado");
      }

      let desconto = subtotal >= 50 ? subtotal * 0.1 : 0;
      let total = subtotal - desconto;
      const fmt = (v) => "R$ " + v.toFixed(2).replace(".", ",");

      mostrar("--- RELATÓRIO ---");
      mostrar("Hambúrguer: " + qtdProduto[1]);
      mostrar("Pizza: " + qtdProduto[2]);
      mostrar("Refrigerante: " + qtdProduto[3]);
      mostrar("Batata Frita: " + qtdProduto[4]);
      mostrar("Quantidade total: " + quantidade);
      mostrar("Subtotal: " + fmt(subtotal));
      mostrar("Desconto: " + fmt(desconto));
      mostrar("Total: " + fmt(total));
    }