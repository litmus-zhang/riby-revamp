import React from 'react'
import ProductCard from '../atoms/productCard'
import SectionHeader from '../atoms/SectionHeader'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { client } from '../../utils/GetContents'




export const getStaticProps: GetStaticProps= async (context)  =>  {
  

    const res = await client.getEntries({
        content_type: "product"
    })
    return {
        props: {
           products: res.items
       }
   }

}

interface Product
{
    name: string

}

interface Props
{
    products: Product[]
 }



function Product(props: Props ) {
    // const {} = props/


console.log(props)

    return (
        <section className='bg-red-900 p-2 pb-8'>
            <SectionHeader text="Our Products" />
            <div className='flex flex-wrap gap-4'>
                PRODUCTS
            {/* {
                PRODUCTS.map((product, index) => {
                    return <ProductCard key={index} {...product} />
                }
                )
            } */}
            </div>
        </section>
    )
}

export default Product
function GetStaticProps()
{
    throw new Error('Function not implemented.')
}

