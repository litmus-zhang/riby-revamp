import React from 'react'
import ProductCard from '../atoms/productCard'
import SectionHeader from '../atoms/SectionHeader'
import type { GetStaticProps, NextPage } from "next";
import ContentService from "../../src/utils/content-service";
import { IProductFields } from '../../src/@types/contentful';



interface Props {
    products: IProductFields[];
  }

export const getStaticProps: GetStaticProps= async ()  =>  {

    const products = (await ContentService.instance.getEntriesByType<IProductFields>("product")).map((entry) => entry.fields)

    console.log(products)
    
    return {
        props: {
            products
        },
        revalidate: 10
    }
}


const Product : NextPage<Props> = ({products}) =>
{
    console.log(products)

    return (
        <section className='bg-red-900 p-2 pb-8'>
            <SectionHeader text="Our Products" />
            <div className='flex flex-wrap gap-4'>
                PRODUCTS
                {/* {
                products.map((product, index) => {
                    return <ProductCard key={index} {...product} />
                }
                )
            } */}
            </div>
        </section>
    )
}

export default Product

