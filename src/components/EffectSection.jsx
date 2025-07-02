import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection(){
    const[modal, setmodal] = useState(false)

    function openModal(){
        setmodal(true)
    }

    return(
        <section>
            <h3>Effects</h3>

        <Button onClick={openModal}>Открыть информацию</Button>
        <Modal open = {modal}>
            <h3>Hello from modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Inventore ducimus
                  accusantium omnis in quis esse, numquam 
                  consequatur, modi fugiat voluptatem, 
                  voluptatum dolorem 
                  dolor harum aspernaturillum velit?
                 Doloremque, accusamus sed.
            </p>
        </Modal>

        </section>
    )
}