import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import ChatWidget from '../components/atoms/ChatWidget'
import Header from '../components/atoms/Header'
import Business from '../components/molecules/Business'
import Footer from '../components/molecules/Footer'
import Hero from '../components/molecules/Hero'
import Product from '../components/molecules/Product'
import Testimonials from '../components/molecules/Testimnials'
import ContentService from '../src/utils/content-service'
import {
  IBusinessFields,
  IProductFields,
  ITestimonialFields,
} from '../src/@types/contentful'

interface Props {
  products: IProductFields[]
  business: IBusinessFields[]
  testimonials: ITestimonialFields[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = (
    await ContentService.instance.getEntriesByType<IProductFields>('product')
  ).map((entry) => entry.fields)
  const business = (
    await ContentService.instance.getEntriesByType<IBusinessFields>('business')
  ).map((entry) => entry.fields)
  const testimonials = (
    await ContentService.instance.getEntriesByType<ITestimonialFields>(
      'testimonial',
    )
  ).map((entry) => entry.fields)

  return {
    props: {
      products,
      business,
      testimonials,
    },
    revalidate: 10,
  }
}

const Home: NextPage<Props> = ({ products, business, testimonials }) => {
  return (
    <div>
      <Head>
        <title>Riby Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-fit">
        <Header />
        <Hero />
        <Product products={products} />
        <Business businesses={business} />
        <Testimonials testimonials={testimonials} />
        <Footer />
        <ChatWidget />
      </main>
    </div>
  )
}

export default Home
