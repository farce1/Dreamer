import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Nav = () => (
  <header className="py-8 px-0">
    <div className="my-0 mx-auto max-w-5xl">
      <div className="flex flex-wrap justify-between items-center">
        <div className="pl-4 pr-4">
          <a>
            LOGO
          </a>
        </div>
        <div className="pl-4 pr-4">
          <nav className="lg:ml-[121px]">
            <ul className="lg:flex lg:items-center lg:flex-wrap lg:-mx-4">
              <li className="lg:px-4">
                <Link href="#">
                  <a className="block text-base text-primary hover:text-secondary hover:font-extrabold hover:transition-all duration-700">
                    About
                  </a>
                </Link>
              </li>
              <li className="lg:px-4">
                <Link href="#">
                  <a className="block text-base text-primary hover:text-secondary hover:font-extrabold hover:transition-all duration-700">
                    Help
                  </a>
                </Link>
              </li>
              <li className="lg:px-4">
                <Link href="#">
                  <a className="block text-base text-primary hover:text-secondary hover:font-extrabold hover:transition-all duration-700">
                    Features
                  </a>
                </Link>
              </li>
              <li className="lg:px-4">
                <Link href="/login">
                  <a className="block text-base text-primary hover:text-secondary hover:font-extrabold hover:transition-all duration-700">
                    Signup
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
