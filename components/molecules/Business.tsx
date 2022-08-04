import React from 'react'
import Businesscard from '../atoms/Businesscard'
import SectionHeader from '../atoms/SectionHeader'



interface Props { }
const BUSINESS_DATA = [
    {
        id: 1,
        title: 'RibyGo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, nihil odio quam magni qui corrupti quas exercitationem dignissimos ab vel',
        image: 'https://images.unsplash.com/photo-1588795909898-f9f8f9f8f9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        buttonText: 'Read More',
        buttonLink: '#'

    },
    {
        id: 2,
        title: 'Riby gbemidebe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, nihil odio quam magni qui corrupti quas exercitationem dignissimos ab vel',
        image: 'https://images.unsplash.com/photo-1588795909898-f9f8f9f8f9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        buttonText: 'Read More',
        buttonLink: '#'

    },
    {
        id: 3,
        title: 'Riby Hollandia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime, nihil odio quam magni qui corrupti quas exercitationem dignissimos ab vel',
        image: 'https://images.unsplash.com/photo-1588795909898-f9f8f9f8f9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        buttonText: 'Read More',
        buttonLink: '#'

    },
    
]

function Business(props: Props) {
    const {} = props

    return (
        <section className='p-2 bg-red-200'>
            <SectionHeader text='Our Business' />
            <div className='flex flex-wrap gap-3'>
                {
                    BUSINESS_DATA.map(business => <Businesscard key={business.id} {...business} />)
                }
            </div>
        </section>
    )
}

export default Business
