import { useState } from 'react'
import logo from '/logo-name.svg'


export default function Header(){
    const [now, setNow] = useState(new Date())
    const alt = 'Result img'

    setInterval( ()=> setNow(new Date()), 1000)
    
  return(
      <header>
        <img src={logo} alt={alt} />

       <span>Время сейчас: {now.toLocaleTimeString()}</span> 
      </header>
  )
}