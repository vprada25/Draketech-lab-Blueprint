import { Drawer, Classes } from '@blueprintjs/core'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <nav className='bp3-navbar bp3-dark'>
      <div>
        <Drawer
          isOpen={isOpen}
          onClose={handleClose}
          icon='shopping-cart'
          title='Shopping Cart'
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <p>I am sample body text!!</p>
            </div>
          </div>
          <div className={Classes.DRAWER_FOOTER}>Drawer Footer</div>
        </Drawer>
        <div className='bp3-navbar-group bp3-align-left'>
          <div className='bp3-navbar-heading'>LabBluePrint</div>
        </div>
        <div className='bp3-navbar-group bp3-align-right'>
          <button className='bp3-button bp3-minimal bp3-icon-home'>Home</button>
          <span className='bp3-navbar-divider'></span>
          <button
            className='bp3-button bp3-minimal bp3-icon-shopping-cart'
            onClick={handleOpen}
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
