import Image from 'next/image'
import React from 'react'
import Button from './button'

interface Props {}

function Businesscard(props: Props) {
    const {} = props

    return (
        <div className='p-3 w-72 border'>
            <div className='mb-3'>
                <div className='flex gap-1'>
                    {/* <Image/> */}
                    <h1 className='font-bold
                    '>
                        RibyGo
                </h1>
                </div>
                <p className='text-sm  text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, nihil odio quam magni qui corrupti quas exercitationem dignissimos ab vel
                </p>

            </div>
            <Button
            text='Read More'
            />

        </div>
    )
}

export default Businesscard
