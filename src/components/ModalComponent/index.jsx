import React from 'react';
import ReactDom from 'react-dom';
import Icon from '../Icon';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function ModalComponent({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className='w-[80%] h-[500px] rounded-md'>
        <button onClick={onClose} className="border-2 border-gray-200 rounded-full">
          <Icon size={28} color="gray" type="close"/>
        </button>   
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}