import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import './menu.css'


export default function Home() {
    return (
        <div className='menu'>
            <a className='social'
            onClick={() => window.open('https://instagram.com/c/encurtaai', '_blank')}>
            <BsInstagram color='#FFF' size={24} />
            </a>
        <Link className='menu-item' to='/links'>
            Meus Links
        </Link>

        </div>
    )
}