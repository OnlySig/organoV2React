import { AiFillCloseCircle } from "react-icons/ai"
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, deletar}) => {
    return (<div className='colaborador'>
        <AiFillCloseCircle className="deletar" onClick={()=>deletar(colaborador.id)}/>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador