"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 rounded-3xl my-0'>
            <h2 className='text-base lg:text-4xl font-bold text-center text-gold'>Subtema</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-6 px-6 mb-5 shadow-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium">
                                    <span>1. Edukasi dan pencegahan gangguan mental di masyarakat</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Edukasi dan pencegahan gangguan mental di masyarakat
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-6 px-6 mb-5 shadow-xl">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium">
                                    <span>2. Intervensi psikofarmakologis dan psikoterapis</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis
                                    sunt diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati beheading.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-6 px-6 mb-5 shadow-2xl">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium">
                                    <span>3. Strategi rehabilitasi dan pemulihan pasien paska gangguan mental</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Craven omni memoria patriae zombieland clairvius narcisse <br /> religionis
                                    sunt diri undead historiarum. Golums, zombies unrelenting <br /> et Raimi fascinati beheading.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
<div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-6 px-6 mb-5 shadow-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium">
                                    <span>4. Kajian multidisiplin terkait kesehatan jiwa</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default FAQ;