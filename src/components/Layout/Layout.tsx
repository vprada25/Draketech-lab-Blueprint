import { useEffect, useReducer, useState } from 'react'
import { Spinner } from '@blueprintjs/core'

import CardContent from '../Card/CardContent'
import Header from '../Navbar/Header'

import { getData } from '../../service/bikeService'

import style from './Layout.module.scss'

export const Layout = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    getData().then((res) => setData(res))
  }, [getData])

  return (
    <div className={style.container}>
      <header className='header'>
        <Header />
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
            />
          ))
        )}
      </div>
      <footer className={style.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}
