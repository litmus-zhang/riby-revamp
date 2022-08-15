import React from 'react'
import Button from './button'
import { Asset } from 'contentful'
import Image from 'next/image'


interface Props {
  title: string
  description: string
  backgroundImage: Asset
  productLogo: Asset
  playstoreLink: string
  appStoreLink: string
}

function ProductCard(props: Props) {
  const {
    title,
    description,
    backgroundImage,
    productLogo,
    playstoreLink,
    appStoreLink,
  } = props

  return (
    <div className="w-fit  h-48 border p-4 flex flex-col justify-between">
      <div className="mb-3">
        <Image
          className=''
        src={'https:' + productLogo.fields.file.url}
                        alt={title}
          layout={'fixed'}
          width={20}
          height={20}
        />
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm  text-gray-300">{description}</p>
      </div>
      <div className="flex gap-2">
        <a href={playstoreLink} target="_blank" rel="noreferrer">
          <Button text="PlayStore" />
        </a>
        <a href={appStoreLink} target="_blank" rel="noreferrer">
          <Button text="App Store" />
        </a>
      </div>
    </div>
  )
}

export default ProductCard
