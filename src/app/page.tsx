import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../public/icons/github'
import InstagramIcon from '../../public/icons/instagram'
import FacebookIcon from '../../public/icons/facebook'

const navMenu = [
  { href: '/home', title: 'home/' },
  { href: '/project', title: 'project/' },
  { href: '/contact', title: 'contact/' }
]

const icon = [
  {
    href: 'https://github.com/Firzi-Rep',
    icon: GithubIcon
  },
  {
    href: 'https://www.instagram.com/ahimsyafirzi/',
    icon: InstagramIcon
  },
  {
    href: 'https://id-id.facebook.com/ahimsyafirzi',
    icon: FacebookIcon
  }
]

export default function Home() {
  return (
    <main className="px-4 py-12 font-rajdhani">
      <header className="sticky w-full font-rajdhani">
        <div className="py-4 max-w-5xl mx-auto flex flex-row justify-between items-center">
          <div className="flex items-center space-x-7">
            <Link href="/" legacyBehavior>
              <a className="flex py-2 items-center space-x-2">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                />
                <span className="font-bold text-xl">Portofolio</span>
              </a>
            </Link>
            <nav className="hidden md:flex text-lg">
              <ul className="flex space-x-3 underline">
                {navMenu.map((navMenu, index) => (
                  <li key={index}>
                    <Link href={navMenu.href} legacyBehavior>
                      <a className="px-3 py-2">{navMenu.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex space-x-4">
            {icon.map((icon) => (
              <Link href={icon.href} legacyBehavior key={icon.href}>
                <a>
                  <icon.icon />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
          <div className="md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-500">
              <div className="flex flex-col md:flex-row">
                <img
                  className="object-cover w-full md:w-60 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center md:text-left">
                    <span className="block text-center md:inline md:text-left">
                      Ahimsya Firziawan
                    </span>
                  </h5>
                  <p className="font-semibold text-center md:text-left">
                    Ability in Quick and Effective Troubleshooting in a Back-End
                    Environment, to identify and address complex technical
                    challenges with efficient and innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-5xl mx-auto py-5">

            <div className="grid grid-rows-1 grid-flow-col gap-4 text-center">
              <div className="">
                <section className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-500">
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-center md:text-left">
                      <span className="block text-center underline md:inline md:text-left">
                        PROJECT
                      </span>
                    </h5>
                    <div className="font-rajdhani">
                      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="pb-3 pt-3 sm:pb-4">
                            <div className="flex items-center">
                              <div className="inline-flex-1 text-3xl">
                                  <p className="font-semibold text-gray-900 truncate dark:text-dark">
                                    Bookshelf-API
                                  </p>
                                  <p className="text-xl text-gray-500 truncate dark:text-gray-800">
                                    www.project-1.com
                                  </p>
                              </div>
                            </div>
                        </li>
                        <li className="pb-3 pt-3 sm:pb-4">
                            <div className="flex items-center">
                              <div className="inline-flex-1 text-3xl">
                                  <p className="font-semibold text-gray-900 truncate dark:text-dark">
                                    POS-API
                                  </p>
                                  <p className="text-xl text-gray-500 truncate dark:text-gray-800">
                                    www.project-POS.com
                                  </p>
                              </div>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="gap-4 text-center py-5">
              <div className="items-center">
                <section className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-500">
                  <div className="p-4">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-center md:text-left">
                      <span className="block text-center underline md:inline md:text-left">
                        CONTACT
                      </span>
                    </h5>
                    <div>
                      <div className="">
                        <form className="">
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="name"
                            >
                              Name
                            </label>
                            <input
                              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600"
                              id="name"
                              type="text"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600"
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600"
                              id="message"
                              placeholder="Enter your message"
                            ></textarea>
                          </div>
                          <div className="flex justify-center">
                            <button
                              className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="button"
                            >
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
