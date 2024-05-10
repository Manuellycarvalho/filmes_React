import estilos from './Inicial.module.css'
import {Cabecalho} from '../Componentes/Cabecalho'
import {Lateral} from '../Componentes/Lateral'
import { Conteudo } from '../Componentes/Conteudo'


export function Inicial() {
  return (
    <div className={estilos.gridConteiner}>
      <Cabecalho />
      <Lateral />
      <Conteudo />

    </div>
  )
}
