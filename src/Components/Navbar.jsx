import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={`${theme} navbar`}>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button  className='btn' onClick={toggleTheme}>Theme</button>
    </nav>
  )
}
export default Navbar
