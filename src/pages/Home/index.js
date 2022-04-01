import { FiLink} from 'react-icons/fi'
import './styles.css'

import Menu from '../../components/Menu'

export default function Home() {
    return (
      <div className="container">
        <div className="logo">
          <img src="/encurtaai.png" alt="encurta.ai" />
          <h1>Encurta.ai</h1>
          <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"/>
          <input 
          placeholder=" Cole seu link aqui..."
          />
        </div>
        
        <button>Encurtar Link</button>
      </div>
          <Menu />
    </div>
    )
  }