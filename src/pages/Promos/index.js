import React from 'react'
import './style.css'





export default function Promos(props) {
    
    function getEmail(){
    
          let inputEmail = document.querySelector('.input-email')
          const email = inputEmail;
          

          if (email.value !== '' || null){

              localStorage.setItem('email', JSON.stringify(email.value))
              alert('email cadastrado com sucesso!')
              email.value = ''
              window.location.href = "#home";
          } else {
              alert("favor preecher o campo de cadastro!")
          }
          
          


    }

    return (
        <>
        <section className="promos" id="promos">   
            
            <div className="img-left-promos">               

            </div>

            <div className="container-produtos">            
               
                <div className="logo">
                    <img src="/img/logo.png" alt="Logo" />
                </div>

                <div className="produtos">
                    <div className="produto">
                        <img src="/img/prod-snes.png" alt="Logo" />
                       <div className="price">
                            <div>
                                <p className="console-name">Super Nintendo</p>
                                <span className="console-price" >$200</span>
                                
                            </div>
                            <button className="btn-product">comprar</button>
                        </div>                         
                    </div>

                    <div className="produto">
                            
                        <img src="/img/prod-megad.png" alt="Logo" />
                        
                       <div className="price">

                            <div>
                                <p className="console-name">Mega Drive</p>     
                                <span className="console-price" >$300</span>                          
                            </div>
                            <button className="btn-product">comprar</button>
                       
                       </div>                         
                    </div>

                    <div className="produto">
                        <img src="/img/prod-masters.png" alt="Logo" />
                       <div className="price">
                            <div>
                                <p className="console-name">Master System</p> 
                                <span className="console-price" >$100</span>                              
                            </div>
                            <button className="btn-product">comprar</button>
                      
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
        </>
    )
}