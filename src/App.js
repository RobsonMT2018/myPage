import React, { useState } from 'react';
import './App.css';
import perfilFoto from './images/file.png';
import skil from './images/mapSkills.drawio.png';

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    
    <div className="App">
          
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="shortcut icon" type="imagex/png" href="./assets/images/icon-page.png >" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
     
      {/* Botão para abrir/fechar o menu lateral */}
      <button onClick={toggleSideMenu} className="side-menu-toggle">
        {isSideMenuOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
      </button>

      {/* Menu Lateral */}
      <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
        <button onClick={toggleSideMenu} className="side-menu-close-button">
          <i className='bx bx-x'></i>
        </button>
        <nav>
          <ul>
            <li><a href="#home" onClick={toggleSideMenu}>Home</a></li>
            <li><a href="#service" onClick={toggleSideMenu}>Serviços</a></li>
            <li><a href="#portifolio" onClick={toggleSideMenu}>Portfólio</a></li>
            <li><a href="#contact" onClick={toggleSideMenu}>Contato</a></li>
            <li><a href="#about" onClick={toggleSideMenu}>Sobre</a></li>
          </ul>
        </nav>
      </div>
      {isSideMenuOpen && <div className="overlay open" onClick={toggleSideMenu}></div>}

   <div className="menu"> {/* Corrigido Class para className */}
            
            <div className="menu-background"></div> {/* Corrigido */}
            <div className="menu-nav1"></div> {/* Corrigido */}
            <div className="menu-nav2"></div> {/* Corrigido */}
            <div className="menu-fundo"></div> {/* Corrigido */}
            <div className="foto-perfil"><img src={perfilFoto} alt="Foto de Perfil"></img></div> {/* Adicionado alt */}


          
            <div>
                  <div className="social-midia"> {/* Corrigido */}
                        <div className="sm1"><a href="https://www.facebook.com/robsontomosique/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle'></i></a></div> {/* Adicionado rel */}
                        <div className="sm2"><a href="https://www.instagram.com/robsonmt20/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt'></i></a></div> {/* Adicionado rel */}
                        <div className="sm3"><a href="https://github.com/RobsonMT2018" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a></div> {/* Adicionado rel */}
                        <div className="sm4"><a href="https://www.linkedin.com/in/robson-maciel-9213b719b/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a></div> {/* Adicionado rel */}
                  </div>
            </div>
     
   </div>


      <main>


            <section className="home" id="home">

                  <div className="home-content"> {/* Corrigido */}
                       
                         <div class="home-tag">

                              <h3>Ola! Bem-vindo.</h3>
                              <h3>Sou <span>Robson M. Tomosique</span></h3>
                              <h3>Desenvolvedor Jr /<span> Front-end </span>/ TI </h3>
                              <p>
                                    Sou profissional com experiência em desenvolvimento web ,mobile e jogos 2D/3D, e tambem design grafico com graduação em 
                                    Tecnólogo em Jogos Digitais e em conclusão de Análise e Desenvolvimento de Sistemas. Possuo certificações CCNAv7, Cybersecurity 
                                    Essentials, CyberOps Associate, além de experiência em manutenção de hardware e configuração de redes. Atuei em projetos freelance 
                                    de criação de páginas web e possuo experiência em atendimento ao público, almoxarifado, expedição e administração. Busco oportunidades 
                                    na área de TI para aplicar meus conhecimentos e habilidades em projetos desafiadores.
                                    
                              </p>

                        </div>
                        
                        <div className="ImgSkill"><img src={skil} alt="Mapa de Habilidades"></img></div> {/* Corrigido e adicionado alt */}
                  </div>

           </section>



            <section className="service" id="service"> {/* Corrigido */}

                  <div Class="home-content">
                       
                         <div class="home-tag">

                            
                              
                              <p>
                                    Experiência em atendimento ao publico, logistica e 
                                    administração, possuo conhecimento em infraestrutura
                                    e administração em redes, lógica de programação, 
                                    banco de dados, habilidade e experiencia em
                                    manutenção de hardware , sistema operacional e 
                                    desenvolvedor/front-end.
                                    
                              </p>
                        </div>
                  </div>

            </section>
            <section className="portifolio" id="portifolio"></section> {/* Corrigido */}
            <section className="contact" id="contact"></section> {/* Corrigido */}
            <section className="about" id="about"></section> {/* Corrigido */}
       
      </main>
     
     
      <footer>
        <p> Copyright &copy; 2024 by &lt;Hello&gt;. All Rights Reserved. </p>
    </footer>
</div>
  );
}

export default App;
