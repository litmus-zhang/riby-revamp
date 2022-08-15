import Image from 'next/image'
import { Asset } from 'contentful'

interface Props
{
    /** Customer Name */
    customerName: string

    /** Testimony */
    testimony: string
  
    /** Customer Role */
    customerRole: string
  
    /** Profile Image */
    profileImage: Asset 
}


function Testimonial(props: Props) {
  const { customerName,customerRole, profileImage, testimony} = props

  return (
    <div className="flex flex-col w-72 h-96 border rounded-md p-4 justify-between gap-4">
      <div className="font-semibold">
       {testimony}
      </div>
      <div className="flex gap-4">
        <div className="w-24 rounded-full overflow-hidden">
          <Image
            src={'https:' + profileImage.fields.file.url}
            height={100}
            width={100}
            alt="avatar"
            layout={'responsive'}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="flex font-bold">{customerName}</p>
          <p className="text-gray-300 text-sm">{customerRole }</p>
          <p className="text-sm text-gray-300">Kano, Kano State</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
