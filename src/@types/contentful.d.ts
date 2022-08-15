// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IBusinessFields {
  /** Title */
  title?: string | undefined

  /** Business Summary */
  businessSummary: string

  /** Background Image */
  backgroundImage: Asset

  /** Business Logo */
  businessLogo: Asset
}

/** This is a sample of riby business content model */

export interface IBusiness extends Entry<IBusinessFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'business'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IProductFields {
  /** Title */
  title: string

  /** Description */
  description: string

  /** Background Image */
  backgroundImage: Asset

  /** Product Logo */
  productLogo: Asset

  /** AppStore Link */
  appStoreLink: string

  /** Playstore Link */
  playstoreLink: string
}

/** This is a sample of riby product model */

export interface IProduct extends Entry<IProductFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'product'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ITestimonialFields {
  /** Customer Name */
  customerName: string

  /** Testimony */
  testimony: string

  /** Customer Role */
  customerRole: string

  /** Profile Image */
  profileImage: Asset
}

/** Customer testimonial goes here */

export interface ITestimonial extends Entry<ITestimonialFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'testimonial'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'business' | 'product' | 'testimonial'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
