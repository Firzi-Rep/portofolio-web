import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../public/icons/github';
import InstagramIcon from '../../public/icons/instagram';
import FacebookIcon from '../../public/icons/facebook';

const navMenu = [
  { href: '/home', title: 'home/' },
  { href: '/project', title: 'project/' },
  { href: '/contact', title: 'contact/' },
];

const icon = [
  {
    href: 'https://github.com/Firzi-Rep',
    icon: GithubIcon,
  },
  {
    href: 'https://www.instagram.com/ahimsyafirzi/',
    icon: InstagramIcon,
  },
  {
    href: 'https://id-id.facebook.com/ahimsyafirzi',
    icon: FacebookIcon,
  },
];

const gitLink = 'https://github.com/Firzi-Rep';
const fblink = 'https://id-id.facebook.com/ahimsyafirzi';
const iglinl = 'https://www.instagram.com/ahimsyafirzi/';
const ldlink = 'https://www.linkedin.com/in/ahimsya-firziawan-a79761243/';

export default function Home() {
  return (
    <main className="px-4 font-rajdhani">
      <header className="sticky w-full font-rajdhani">
        <div className="py-4 max-w-7xl mx-auto flex flex-row justify-between items-center">
          <div className="flex items-center space-x-7">
            <Link href="/" legacyBehavior>
              <a className="flex py-2 items-center space-x-2">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src="../../icons/logo.png"
                />
                <span className="font-bold text-xl">Portfolio</span>
              </a>
            </Link>
            <nav className="hidden md:flex text-lg">
              <ul className="flex space-x-3 underline">
                {navMenu.map((navMenu, index) => (
                  <li className="hover:text-gray-600" key={index}>
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

      <div className="max-w-7xl py-6 mx-auto">
        <div className="md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-500">
            <div className="flex flex-col md:flex-row">
            <img
                className="object-cover w-full md:w-60 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
                src="/me.png"
                alt="Foto Ahimsya Firziawan"
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

      <div className="">
        <section className="border my-4 mx-4 border-gray-500">
          <div className="flex justify-center items-center w-full">
            <h1 className="font-bold text-4xl underline py-6">Project</h1>
          </div>
          {/* container card */}
          <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4">
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="../../icons/exampleapi.jpg"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/exampleapi.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">Accounting Event Website</h1>
                      <a
                        href="../../icons/cert/sertifikat_js.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        accountingfairpnj2023.online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="../../icons/exampleapi.jpg"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/exampleapi.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">Accounting Event Website</h1>
                      <a
                        href="../../icons/cert/sertifikat_js.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        accountingfairpnj2024.online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="../../icons/exampleapi.jpg"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/exampleapi.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">FiveM Game Scripting</h1>
                      <a
                        href="../../icons/cert/sertifikat_js.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        Game_Scripting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="../../icons/exampleapi.jpg"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/exampleapi.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">FiveM Game Scripting</h1>
                      <a
                        href="../../icons/cert/sertifikat_js.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        Game_Scripting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </section>
      </div>

      <div className="">
        <section className="border my-4 mx-4 border-gray-500">
          <div className="flex justify-center items-center w-full">
            <h1 className="font-bold text-4xl underline py-6">Certificate</h1>
          </div>
          {/* container card */}
          <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4">
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/js.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">
                        Basic Javascript Practice
                      </h1>
                      <a
                        href="../../icons/cert/sertifikat_js.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/devops.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">
                        Basic DevOps Practice
                      </h1>
                      <a
                        href="../../icons/cert/sertifikat_DevOps.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/kotlin.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">
                        Basic Kotlin Practice
                      </h1>
                      <a
                        href="../../icons/cert/sertifikat_kotlin.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/backend.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">
                        Basic Application Back-End
                      </h1>
                      <a
                        href="../../icons/cert/sertifikat_backend.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}

            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/sql.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">Basic SQL Practice</h1>
                      <a
                        href="../../icons/cert/sertifikat_sql.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}

            {/* card start */}
            <div className="my-4 flex justify-center">
              <div className="lg:h-72 h-96 relative lg:w-72 w-96">
                <img
                  className="w-full h-full absolute left-0 top-0"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt=""
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-between py-2 absolute">
                  <div className="w-full px-2">
                    <img src="../../icons/cert/img/git.jpg" alt="" />
                  </div>
                  <div className="w-full px-2">
                    <div className="w-full bg-white rounded-md h-20 flex flex-col justify-center px-4">
                      <h1 className="font-bold text-lg">Basic GIT Practice</h1>
                      <a
                        href="../../icons/cert/sertifikat_git.pdf"
                        className="underline cursor-pointer hover:text-gray-400 text-gray-70 w-10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </section>
      </div>

      <div>
        <section className="max-w-7xl py-6 mx-auto bg-white  overflow-hidden">
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-wrap -m-6">
              <div className="w-full md:w-1/2 p-6">
                <div className="md:max-w-lg">
                  <h2 className="mb-7 underline font-heading font-semibold text-4xl sm:text-3xl xl:text-4xl text-black">
                    Contact Me
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <div className="md:max-w-md ml-auto">
                  <p className="mb-4 max-w-max underline text-black bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">
                    Send me a mail
                  </p>
                  <p className="mb-16 text-black text-2xl">
                    firziawan20@gmail.com
                  </p>
                  <p className="mb-4 max-w-max underline text-black  bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">
                    Follow Me
                  </p>
                  <ul>
                    <li className="mb-6 text-black hover:text-gray-600 text-2xl">
                      <a href={fblink}>Facebook</a>
                    </li>
                    <li className="mb-6 text-black hover:text-gray-600 text-2xl">
                      <a href={ldlink}>Linkedin</a>
                    </li>
                    <li className="mb-6 text-black hover:text-gray-600 text-2xl">
                      <a href={iglinl}>Instagram</a>
                    </li>
                    <li className="text-black hover:text-gray-600 text-2xl">
                      <a href={gitLink}>Github</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <footer className="bg-white rounded-lg shadow max-w-7xl py-6 mx-auto dark:bg-white">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-black sm:text-center dark:text-black">
              © 2023{' '}
              <a
                href="https://github.com/Firzi-Rep"
                className="hover:underline"
              >
                Ahimsya Firziawan™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex space-x-6 underline">
              {icon.map((icon) => (
                <Link href={icon.href} legacyBehavior key={icon.href}>
                  <a>
                    <icon.icon />
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </main>
  );
}
