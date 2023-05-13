import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .6 } }} className='w-full flex flex-col lg:flex-row-reverse lg:gap-20 gap-10'>
            <div className='lg:w-1/2 w-full'>
                <div className='lg:py-12 py-6 font-titleFont'>
                    <p className='text-sm text-designColor tracking=[4px]'>FEATURES</p>
                    <h2 className='text-2xl lg:text-4xl font-bold'>Programming Skills</h2>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>c</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x: "-100%", opacity: 0
                            }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='w-[85%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>c++</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{
                                    x: "-100%", opacity: 0
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='w-full h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>python</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{
                                    x: "-100%", opacity: 0
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}

                                className='w-[75%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>75%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>javascript</p>
                        <span className='w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{
                                    x: "-100%", opacity: 0
                                }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='w-full h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>

            <div className='lg:w-1/2 w-full'>
                <div className='lg:py-12 py-6 font-titleFont'>
                    <p className='text-sm text-designColor tracking=[4px]'>FEATURES</p>
                    <h2 className='text-2xl lg:text-4xl font-bold'>Development Skills</h2>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>Reactjs</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x: "-100%", opacity: 0
                            }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='w-[95%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>95%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>redux</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x: "-100%", opacity: 0
                            }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='w-full h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>expressjs</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x:"-100%", opacity:0
                            }}
                            animate={{x:0,opacity:1}}
                            transition={{duration:.5, delay:.5}}
                            className='w-full h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>bootstrap</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x:"-100%", opacity:0
                            }}
                            animate={{x:0,opacity:1}}
                            transition={{duration:.5, delay:.5}}
                            className='w-[80%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>tailwindcss</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x:"-100%", opacity:0
                            }}
                            animate={{x:0,opacity:1}}
                            transition={{duration:.5, delay:.5}}
                            className='w-[75%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>75%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>nodejs</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x:"-100%", opacity:0
                            }}
                            animate={{x:0,opacity:1}}
                            transition={{duration:.5, delay:.5}}
                            className='w-[90%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm font-medium uppercase'>mongodb</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{
                                x:"-100%", opacity:0
                            }}
                            animate={{x:0,opacity:1}}
                            transition={{duration:.5, delay:.5}}
                            className='w-[95%] h-full bg-gradient-to-r from-yellow via-orange
                            to-orangered rounded-md relative'>
                                <span className='absolute -top-8 right-0'>95%</span>
                            </motion.span>
                        </span>
                    </div>
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
