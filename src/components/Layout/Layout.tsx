import { useEffect, useState } from 'react'
import { Spinner, Position, Toaster, Intent } from '@blueprintjs/core'

import CardContent from '../Card/CardContent'
import Header from '../Navbar/Header'
import { OurToaster } from './components/OurToaster'

import { getData } from '../../service/bikeService'

import style from './Layout.module.scss'

export const Layout = () => {
  const [data, setData] = useState<any[]>([])
  const [product, setProduct] = useState<any>([])
  const [productDetail, setProductDetail] = useState<any>([])

  useEffect(() => {
    getData().then((res) => setData(res))
  }, [getData])

  const addProduct = (car: any) => {
    const [id, model] = car
    const arrayProduct = product
    const arrayProductDet = productDetail
    let quantity = 1

    for (let i = 0; i < arrayProduct.length; i++) {
      if (arrayProduct[i].id === id) {
        quantity++
      }
    }

    arrayProduct.push({ id, model })
    arrayProductDet.push({ id, model, quantity })

    setProduct(arrayProduct)
    setProductDetail(arrayProductDet)
    OurToaster.show({
      icon: 'tick',
      intent: Intent.SUCCESS,
      message: 'product added to shopping cart',
    })
  }

  return (
    <div className={style.container}>
      <header className='header'>
        <Header product={product} productDetail={productDetail} />
      </header>
      <div className={style.main}>
        {data.length == 0 ? (
          <Spinner />
        ) : (
          data.map((item: any, key) => (
            <CardContent
              id={key}
              key={key}
              image={item.imageBicycle}
              model={item.model}
              price={item.price}
              addToCart={addProduct}
            />
          ))
        )}
      </div>
      <footer className={style.footer}>
        <p>Aqui Va el Footer </p>
      </footer>
    </div>
  )
}
