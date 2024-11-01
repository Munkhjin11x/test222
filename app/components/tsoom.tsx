import React from 'react'
import { Modal } from './modal'
import { InfiniteMovingCards } from '@/components/ui/infinite'
type ModalProps = {
    onClose: () => void,
    isOpen : boolean
}

export const Tsoom = ({onClose , isOpen}:ModalProps) => {
  return (
    <Modal overlayClass='bg-black opacity-50' className='w-full bg-gradient-to-r  from-[#7d75ec] to-[pink]' onClose={onClose} isOpen={isOpen} title='hairdaa hamgaas ih hairtaishvv <3'>

    </Modal>
  )
}

