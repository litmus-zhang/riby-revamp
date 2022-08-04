import Image from 'next/image'
import React from 'react'

interface Props {}

const image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

function Testimonial(props: Props) {
    const {} = props

    return (
        <div className='flex flex-col w-72 h-96 border rounded-md p-4 justify-between gap-4'>
            <div className='font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestiae vitae esse dignissimos amet porro fugiat aspernatur quo delectus. Cum aut saepe nulla cumque ducimus hic atque distinctio perspiciatis iste.

            </div>
            <div className='flex gap-4'>
                <div className='w-24 rounded-full overflow-hidden'>
                <Image
                    src={image}
                    height={100}
                    width={100}
                    alt="avatar"
                    layout="responsive"
                    className='object-fill'
                />
                </div>
                <div className='flex flex-col w-full'>
                    <p className='flex font-bold'>
                        John Snow 
                    </p>
                    <p className='text-gray-600 text-sm'>
                        CEO Barter.com
                    </p>
                    <p className='text-sm text-gray-400'>Kano, Kano State
                    </p>
                   
                </div>
            </div>
        </div>
    )
}

export default Testimonial
