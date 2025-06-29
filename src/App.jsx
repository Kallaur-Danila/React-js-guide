import Header from './components/Header'
import { ways } from './data'
import WayToTeach from './components/WayToTeach'

export default function App() {
  return (
    <div>
      <Header />
    <main>
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        <WayToTeach {...ways[0]}/>
        <WayToTeach {...ways[1]}/>
        <WayToTeach {...ways[2]}/>
        <WayToTeach {...ways[3]}/>
        
      </ul>
    </section>
    </main>
    </div>
  ) 
}

