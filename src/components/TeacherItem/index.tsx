import * as React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
function TeacherItem(){

    return(
        <article className='teacher-item'>
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/121322652?v=4" alt="" />
                        <div>
                            <strong>Elias Moreira</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias Matemática avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas astravés de experiências.
                    </p>
                    <footer>
                        <p>Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
export default TeacherItem