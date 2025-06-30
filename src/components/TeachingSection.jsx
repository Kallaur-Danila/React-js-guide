
import WayToTeach from './WayToTeach'
import { ways,} from '../data'


export default function TeachingSection(){
    return(
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
    )
}