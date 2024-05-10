import estilos from './Lateral.module.css'
// import Profs from '../assets/Profs.jpeg'


export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
               
                <div className={estilos.perfil}>
                <img className={estilos.avatar}/>
                    <p>Manuelly</p>
                </div>
            </header>

        </aside>
    )
}