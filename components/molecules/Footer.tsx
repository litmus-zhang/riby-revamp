import React from 'react'
import FooterCombo from '../atoms/FooterCombo'
import FooterItem from '../atoms/FooterItem'


interface Props { }

// const FOOTER_DATA = [
//     {
//         header: 'Products',
//         items: [
//             {
//                 text: 'RibyGo',
//                 link: '#'
//             },
//             {
//                 text: 'Riby gbemidebe',
//                 link: '#'
//             },
//             {
//                 text: 'Riby Hollandia',
//                 link: '#'
//             }
//         ]
//     }, {
//         header: 'Business',
//         items: [
//             {
//                 text: 'RibyGo',
//                 link: '#'

//             },
//             {
//                 text: 'Riby gbemidebe',
//                 link: '#'
//             },
//             {
//                 text: 'Riby Hollandia',
//                 link: '#'
//             }
//         ]
//     }
// ]

const BUSINESS_DATA = [
                {
                    text: 'RibyGo',
                    link: '#'
    
                },
                {
                    text: 'Riby gbemidebe',
                    link: '#'
                },
                {
                    text: 'Riby Hollandia',
                    link: '#'
                }
            ]

function Footer(props: Props) {
    const {} = props

    return (
        <footer className='bg-black text-gray-200 p-3'>
            <div className='flex flex-wrap gap-3'>
                <div className='flex flex-col w-48'>
                    <strong>Business</strong>
                {
                    BUSINESS_DATA.map(footer => <FooterItem key={footer.text} {...footer} />)
                }

                </div>
                <div className='flex flex-col w-48'>
                    <strong>Products</strong>
                {
                    BUSINESS_DATA.map(footer => <FooterItem key={footer.text} {...footer} />)
                }

                </div>
                <div className='flex flex-col w-48'>
                    <strong>General</strong>
                {
                    BUSINESS_DATA.map(footer => <FooterItem key={footer.text} {...footer} />)
                }

                </div>
                <div>
                    <form>
                        <div className='flex items-center rounded-full first-letter justify-between overflow-hidden'>
                            <input
                                className='pl-4 py-2 bg-gray-600 text-black'
                                placeholder='Email Address'
                            />
                            <button className='bg-red-800 w-fit cursor-pointer p-2'>Subscribe</button>
                        </div>
                    </form>
                </div>
                </div>
            
        </footer>
    )
}

export default Footer
