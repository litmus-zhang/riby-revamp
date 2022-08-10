import React from 'react'
import Button from './button'


interface Props
{
    title: string
    description: string
    backgroundImage: string
    productLogo: string
    playstoreLink: string
    appstoreLink: string
}

function ProductCard(props: Props) {
    const {title, description, backgroundImage, productLogo,playstoreLink, appstoreLink} = props

    return (
        <div className='w-fit  h-48 border p-4 flex flex-col justify-between'>
            <div className='mb-3'>
                <h1 className='font-bold'>{title }</h1>
            <p className='text-sm  text-gray-300'>
               {description}
            </p>
            </div>
            <div className='flex gap-2'>
            <a href={ playstoreLink} target="_blank" rel="noreferrer">
            <Button text='PlayStore' />
            </a>
            <a href={appstoreLink} target="_blank" rel="noreferrer" >
            <Button text='App Store' />
            </a>
            </div>
            
        </div>
    )
}

export default ProductCard
