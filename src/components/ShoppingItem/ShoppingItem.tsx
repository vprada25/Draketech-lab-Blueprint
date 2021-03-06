import {
  Drawer,
  Classes,
  DrawerSize,
  Button,
  ButtonGroup,
  Divider,
  Tag,
} from '@blueprintjs/core'
import { removeDuplicateItems } from '../../utils/functions'

import style from './ShoppingItem.module.scss'

export const ShoppingItem = ({
  isOpen,
  handleClose,
  product,
  productDetail,
}: any) => {
  const productCart = removeDuplicateItems(product)

  const handleEmptyCart = () => {
    handleClose()
    window.location.reload()
  }

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
              <div className={style.container} key={key}>
                <Divider />
                <Tag intent='success' className={Classes.MINIMAL}>
                  {item.model}
                </Tag>
                <ButtonGroup minimal={true}>
                  <Button icon='add' intent='success' />
                  <Divider />
                  <Button icon='remove' intent='danger' />
                </ButtonGroup>
              </div>
            ))}
          </div>
        </div>
        <div className={Classes.DRAWER_FOOTER}>
          <ButtonGroup className={Classes.FILL}>
            <Button className={Classes.FILL} intent='success' text='Pay' />
            <Divider />
            <Button
              className={Classes.FILL}
              intent='danger'
              onClick={handleEmptyCart}
              text='Empty Cart'
            />
          </ButtonGroup>
        </div>
      </Drawer>
    </div>
  )
}
