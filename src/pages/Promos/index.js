import React from 'react'
import './style.css'





export default function Promos(props) {
    
    function getEmail(){
    
          let inputEmail = document.querySelector('.input-email')
          const email = inputEmail;
          

          if (email.value !== '' || null){

              localStorage.setItem('email', email.value)
              alert('email cadastrado com sucesso!')
              window.location.href = "#home";
          } else {
              alert("favor preecher o campo de cadastro!")
          }
          
          


    }

    return (
        <section className="promos" id="promos">
            
            
            
            <div className="img-left">

                <img  src="/img/imgLeft-produtos.png" alt="imagem de fundo" ></img>

            </div>

            <div className="container-produtos">            
                <div className="logo">
                    <img src="/img/logo.png" alt="Logo" />
                </div>

                <div className="produtos">
                    <div className="produto">
                        <img src="/img/prod-snes.png" alt="Logo" />
                       <div className="price">
                            <p className="console-name">Super Nintendo</p>
                            <p className="console-price">$200</p>
                        </div>                         
                    </div>

                    <div className="produto">
                            
                        <img src="/img/prod-megad.png" alt="Logo" />
                        
                       <div className="price">
                       <p className="console-name">Mega Drive</p>
                        <p className="console-price">$200</p>
                       </div>                         
                    </div>

                    <div className="produto">
                        <img src="/img/prod-masters.png" alt="Logo" />
                       <div className="price">
                        <p className="console-name">Master System</p>
                        <p className="console-price">$200</p>
                        </div>                         
                    </div>
                </div>

                <form>
                    <div className="form">
                        <h1>PARA RECEBER NOSSAS AS NOVIDADES</h1>
                        <input className="input-email" type="text" placeholder="email" />
                        <button onClick={getEmail}>cadastrar email</button>
                    </div>
                </form>
            </div>
            

        </section>
    )
}