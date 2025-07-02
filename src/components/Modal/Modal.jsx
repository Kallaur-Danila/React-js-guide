import { createPortal } from 'react-dom'
import { useRef } from 'react'
import './Modal.css'

export default function Modal({children, open}){
    const dialog = useRef() 
    
    if(open){
        dialog.current.showModal()
    } else{
        dialog.current.closes()
    }

    return createPortal(
        <dialog open={open}>{children}</dialog>,
        document.getElementById('modal')
    )
}