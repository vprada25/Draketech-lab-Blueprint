import { useState } from 'react'

import { ShoppingItem } from '../ShoppingItem/ShoppingItem'

const Header = ({ product, productDetail }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <div>
      <nav className='bp3-navbar bp3-dark'>
        <div>
          <div className='bp3-navbar-group bp3-align-left'>
            <div className='bp3-navbar-heading'>LabBluePrint</div>
          </div>
          <div className='bp3-navbar-group bp3-align-right'>
            <ShoppingItem
              isOpen={isOpen}
              handleClose={handleClose}
              product={product}
              productDetail={productDetail}
            />
            <button className='bp3-button bp3-minimal bp3-icon-home'>
              Home
            </button>
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
    </div>
  )
}

export default Header
