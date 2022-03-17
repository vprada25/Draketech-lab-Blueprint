import { Button, Card, Elevation, Drawer, Classes } from '@blueprintjs/core'

import style from './CardContent.module.scss'

const CardContent = ({ id, image, model, price, addToCart }: any) => {
  const productCart = [id, model]
  return (
    <Card className={style.Card} interactive={true} elevation={Elevation.TWO}>
      <h5>
        <img src={image} alt='' height={170} />
      </h5>
      <p>{model}</p>
      <p>{price}</p>
      <Button onClick={() => addToCart(productCart)}>Add to Cart</Button>
    </Card>
  )
}

export default CardContent
