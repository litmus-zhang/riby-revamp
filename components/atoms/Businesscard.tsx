import Image from 'next/image'
import React from 'react'
import Button from './button'
import { Asset, Entry } from 'contentful'
// export interface IBusinessFields {
//     /** Title */
//     title?: string | undefined;

//     /** Business Summary */
//     businessSummary: string;

//     /** Background Image */
//     backgroundImage: Asset;

//     /** Business Logo */
//     businessLogo: Asset;
//   }

interface Props {
  /** Title */
  title?: string | undefined

  /** Business Summary */
  businessSummary: string

  /** Background Image */
  backgroundImage: Asset

  /** Business Logo */
  businessLogo: Asset
}

function Businesscard(props: Props) {
  const { title, businessSummary, businessLogo, backgroundImage } = props

  return (
    <div className="p-3 w-fit h-48 border border-gray-800 flex flex-col justify-between">
      <div className="mb-3">
        <div className="flex gap-1">
          {/* <Image/> */}
          <h1
            className="font-bold
                    "
          >
            {title}
          </h1>
        </div>
        <p className="text-sm  text-gray-500">{businessSummary}</p>
      </div>
      <a>
        <Button text={'Read More'} />
      </a>
    </div>
  )
}

export default Businesscard
