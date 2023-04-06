import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);
  return (
    <footer className={`${theme} navbar`}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
