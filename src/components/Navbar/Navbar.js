import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { navlinkData } from '../../constants/index.js'
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {FiMenu} from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion';
// import { link } from 'fs'

const pagePaths = {
  home: '/',
  feature: '/features',
  project: '/projects',
  resume: '/resume',
  contact: '/contact',
};

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false)
    return (
      <div className="sticky top-0 z-50 mx-auto flex h-24 w-full items-center justify-between border-b-[1px] border-b-gray-600 bg-bodyColor font-titleFont">
        <div>
          <img className='w-40 rounded-md cursor-pointer' src={logo} alt="logo" />
        </div>
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navlinkData.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link to={pagePaths[link]}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer shadow-shadowone transition-transform duration-300 hover:scale-105"
          >
            {showMenu ? <MdClose /> : <FiMenu />}
          </button>
          <AnimatePresence>
            {showMenu && (
              <>
                <motion.button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setShowMenu(false)}
                  className="fixed inset-0 z-40 bg-black/60 mdl:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.aside
                  className="fixed top-0 left-0 z-50 h-screen w-[min(86vw,360px)] overflow-y-auto bg-gradient-to-br from-[#20272b] to-[#111315] p-6 shadow-2xl scrollbar-hide mdl:hidden"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  aria-label="Mobile navigation"
                >
                  <div className="flex min-h-full flex-col gap-10">
                    <div className="flex items-start justify-between border-b border-gray-700 pb-6">
                      <div>
                        <img className="w-36 rounded-md" src={logo} alt="logo" />
                        <p className="mt-3 text-sm text-gray-400">You are on the right track!</p>
                      </div>
                      <button
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={() => setShowMenu(false)}
                        className="text-2xl text-gray-400 transition-colors hover:text-designColor"
                      >
                        <MdClose />
                      </button>
                    </div>
                    <motion.ul
                      className="flex flex-col gap-3"
                      initial="hidden"
                      animate="visible"
                      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                    >
                      {navlinkData.map((item) => (
                        <motion.li
                          key={item._id}
                          className="border-b border-gray-800 pb-3 text-lg font-normal tracking-wide text-gray-300"
                          variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                        >
                          <Link
                            onClick={() => setShowMenu(false)}
                            to={pagePaths[item.link]}
                            className="block cursor-pointer transition-colors hover:text-designColor"
                          >
                            {item.title}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <div className="mt-auto flex flex-col gap-4">
                      <h2 className="text-sm uppercase tracking-[3px] text-designColor">Find me in</h2>
                      <div className="flex gap-4">
                        <span className="bannerIcon"><FaFacebookF /></span>
                        <span className="bannerIcon"><FaTwitter /></span>
                        <span className="bannerIcon"><FaLinkedinIn /></span>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
export default Navbar
