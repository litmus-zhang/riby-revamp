import React from 'react'
import ProductCard from '../atoms/productCard'
import SectionHeader from '../atoms/SectionHeader'
import type { NextPage } from 'next'
import { IProductFields } from '../../src/@types/contentful'

interface Props {
  products: IProductFields[]
}

const Product: NextPage<Props> = ({ products }) => {

  return (
    <section className="bg-red-900 p-2 pb-8">
      <SectionHeader text="Our Products" />
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} {...product} />
        })}
      </div>
    </section>
  )
}

export default Product
