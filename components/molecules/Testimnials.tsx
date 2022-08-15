import React from 'react'
import { ITestimonialFields } from '../../src/@types/contentful'
import Testimonial from '../atoms/testimonial'
import SectionHeader from '../atoms/SectionHeader'

interface Props {
  testimonials: ITestimonialFields[]
}

function Testimonials({ testimonials }) {
  console.log(testimonials)
  return (
    <section className="bg-gray-700 text-white p-2 pb-8">
      <SectionHeader text="What Our Customer Says" />
      <div className="flex flex-wrap gap-4">
        {testimonials.map((testimonial, index) =>
        {
          return   <Testimonial key={index}
          {...testimonial}
          />
        }
          )
        }
      </div>
    </section>
  )
}

export default Testimonials
