import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'

export default function App() {
  const [contentType, setContentType] = useState(null)

function handleClick(type){
  setContentType(type)
}

  return (
    <div>
      <Header />
    <main>
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (<WayToTeach key = {way.description}{...way}/>))}


        {/* <WayToTeach {...ways[0]}/>
        <WayToTeach {...ways[1]}/>
        <WayToTeach {...ways[2]}/>
        <WayToTeach {...ways[3]}/>
        <WayToTeach {...ways[4]}/> */}
        
      </ul>
    </section>
    <section>
      <h3>Чем мы отличаемся от других</h3> 
      <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
      <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
      <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

      { contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>}
      
    </section>
    </main>
    </div>
  ) 
}

