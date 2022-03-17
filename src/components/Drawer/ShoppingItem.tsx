import { Drawer, Classes, DrawerSize } from '@blueprintjs/core'
import { removeDuplicateItems } from '../../utils/functions'

export const ShoppingItem = ({ isOpen, handleClose, product }: any) => {
  const productCart = removeDuplicateItems(product)

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        onClose={handleClose}
        icon='shopping-cart'
        title='Shopping Cart'
        size={DrawerSize.SMALL}
      >
        <div className={Classes.DRAWER_BODY}>
          <div className={Classes.DIALOG_BODY}>
            {productCart.map((item: any, key: number) => (
              <p key={key}>{item.model}</p>
            ))}
          </div>
        </div>
      </Drawer>
      <div className={Classes.DRAWER_FOOTER}></div>
    </div>
  )
}
