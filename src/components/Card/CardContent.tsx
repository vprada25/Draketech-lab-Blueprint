import { Button, Card, Elevation, Drawer, Classes } from '@blueprintjs/core'

import style from './CardContent.module.scss'

const CardContent = ({ id, image, model, price, addToCart }: any) => {
  return (
    <Card className={style.Card} interactive={true} elevation={Elevation.TWO}>
      <h5>
        <img src={image} alt='' height={170} />
      </h5>
      <p>{model}</p>
      <p>{price}</p>
      <Button onClick={() => addToCart(id)}>Add to Cart</Button>
    </Card>
  )
}

export default CardContent
