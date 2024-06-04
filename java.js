    function voltarAoTopo() {
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
        scrollToTop();
    }

    window.onscroll = function() {mostrarBotaoVoltar()};
    
    function mostrarBotaoVoltar() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btnVoltarTopo").style.display = "block";
        } else {
            document.getElementById("btnVoltarTopo").style.display = "block";
        }
    }
      

    document.getElementById('fechar-menu').addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
      });



      var imagemAtual = null;

      function mostrarImagem1() {
          ocultarImagemAtual();
          document.getElementById('imagem1').style.display = 'block';
          imagemAtual = 'imagem1';
      }
  
      function mostrarImagem2() {
          ocultarImagemAtual();
          document.getElementById('imagem2').style.display = 'block';
          imagemAtual = 'imagem2';
      }
  
      function mostrarImagem3() {
          ocultarImagemAtual();
          document.getElementById('imagem3').style.display = 'block';
          imagemAtual = 'imagem3';
      }
  
      function ocultarImagemAtual() {
          if (imagemAtual !== null) {
              document.getElementById(imagemAtual).style.display = 'none';
          }
      }
  
      function ocultarImagem() {
          ocultarImagemAtual();
          imagemAtual = null;
      }