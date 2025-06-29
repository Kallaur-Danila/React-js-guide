import logo from '/logo-name.svg'


export default function Header(){
    const now = new Date()
    const alt = 'Result img'
    
  return(
      <header>
        <img src={logo} alt={alt} />
        {/* <h3>Result University</h3> */}

       <span>Время сейчас: {now.toLocaleTimeString()}</span> 
      </header>
  )
}