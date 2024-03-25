import React, { useState } from 'react'
import ModalComponent from '../ModalComponent'
import Icon from '../Icon'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button className='text-white mx-2' onClick={() => setIsOpen(true)}>Sign In</button>

        <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
          <div className='mx-auto flex justify-center'>
        <Icon size={60} color="gray" type="apple_logo"/>
          </div>
         <div className='mx-auto text-center mt-5'>
         <p className='text-2xl font-extrabold'>Sign In or Sign Up</p>
        <p className='text-gray-500 mt-2 text-2xl'>Enter your email to get started.</p>
         </div>
        </ModalComponent>
      </div>
    </>
  )
}