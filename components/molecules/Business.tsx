import React from 'react'
import Businesscard from '../atoms/Businesscard'
import SectionHeader from '../atoms/SectionHeader'
import { IBusinessFields } from '../../src/@types/contentful'

interface Props {
  businesses: IBusinessFields[]
}

function Business({ businesses }) {

  return (
    <section className="p-2 bg-red-200">
      <SectionHeader text="Our Business" />
      <div className="flex flex-wrap gap-3">
        {businesses.map((business, index) => (
          <Businesscard key={index} {...business} />
        ))}
      </div>
    </section>
  )
}

export default Business
