import React from 'react'
import Link from 'next/link'

export const Banner = () => (
  <section className="mb-20 mt-16">
    <div className="my-0 mx-auto max-w-7xl relative">
      <div className="lg:max-w-2xl absolute top-0 left-0 z-10">
        <h1 className="lg:text-7xl font-semibold mb-14 text-secondary">
          Welcome to Dreamer!
        </h1>
        <p className="lg:max-w-sm text-softgray lg:text-lg font-medium mb-14">
          Dreamer is a platform where you can share your dreams with others.
          Experience unexpected stories with other people.
        </p>
        <Link href="#">
          <a className="rounded-full px-[29px] py-[17px] bg-[#2c1152] text-white">
            Learn More
          </a>
        </Link>
      </div>
      <div className="text-right md:pt-20">
        <img
          src="/images/banner-image.svg"
          alt="banner-image"
          className="inline-block"
        />
      </div>
    </div>
  </section>
)
