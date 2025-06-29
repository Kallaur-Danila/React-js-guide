import Header from './components/Header'
// import { ways } from '/data'

function WayToTeach(props){
  return(
        <li>
          <p>
            <strong>{props.title}</strong>{props.discription}
          </p>
        </li>
  )
}

export default function App() {
  return (
    <div>
      <Header />
    <main>
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        <WayToTeach title='111' discription = '222' />
        <WayToTeach title='333' discription = '444' />
      </ul>

    </section>
    </main>
    </div>
  ) 
}

