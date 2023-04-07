import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import logoDH from "../img/DH.png"

const Footer = () => {
  const { theme} = useContext(ContextGlobal);
  return (
    <footer className={`${theme} navbar`}>
        <p>Powered by</p>
        <img src={logoDH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
