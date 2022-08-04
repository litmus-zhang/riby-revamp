import React from 'react'
import ProductCard from '../atoms/productCard'
import SectionHeader from '../atoms/SectionHeader'
import {createClient} from "contentful"

//zhzgv7x4ee2o
//z1vAzM27q9zu-LsrRgAiZf-O0up5ShDgiAs5_TtKdHw

export async function getStaticProps(params:type) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })


    const response = await client.getEntries({content_type: 'product' })

    return {
        props: {
            products: response.items
        }
    }
}



interface Props { }

const PRODUCTS = [
    {
        name: 'Riby CoBanking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://picsum.photos/id/1/1920/1080',
        alt: 'Hero Image',
        buttonText: 'PlayStore',
        PlaystoreLink: 'https://play.google.com/store/apps/details?id=com.riby.riby',
        AppstoreLink: 'https://itunes.apple.com/us/app/riby/id1498420000?mt=8'
    },
    {
        name: 'Riby Cooperative',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://picsum.photos/id/1/1920/1080',
        alt: 'Hero Image',
        buttonText: 'PlayStore',
        PlaystoreLink: 'https://play.google.com/store/apps/details?id=com.riby.riby',
        AppstoreLink: 'https://itunes.apple.com/us/app/riby/id1498420000?mt=8'
    },
    {
        name: 'Riby CoAgent',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://picsum.photos/id/1/1920/1080',
        alt: 'Hero Image',
        buttonText: 'PlayStore',
        PlaystoreLink: 'https://play.google.com/store/apps/details?id=com.riby.riby',
        AppstoreLink: 'https://itunes.apple.com/us/app/riby/id1498420000?mt=8'
    },
]

function Product({products}) {
    // const {} = props

    console.log(products)
    return (
        <section className='bg-red-900 p-2 pb-8'>
            <SectionHeader text="Our Products" />
            <div className='flex flex-wrap gap-4'>
            {
                PRODUCTS.map((product, index) => {
                    return <ProductCard key={index} {...product} />
                }
                )
            }
            </div>
        </section>
    )
}

export default Product
