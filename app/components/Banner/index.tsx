import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-black bg-cream hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-gold'>DAFTARKAN DIRI ANDA!</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='font-urbanist text-6xl lg:text-60xl font-bold text-darkpurple' style={{ textShadow: '5px 5px 4px rgba(0,0,0,0.3)' }}>
                            WEBINAR NASIONAL <br/>DAN CALL FOR PAPER  <br/></h1>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-3xl lg:text-30xl font-bold text-grey'>
                            Mental Health: "Preventif, Kuratif, dan Rehabilitatif"</h1>
                    </div>
                    <div className="py-2 text-center lg:text-start">
                        <h3 className='text-2xl lg:text-20xl text-grey'>
                            Program Studi Farmasi, Fakultas Sains dan Teknologi, Universitas PGRI Yogyakarta</h3>
                    </div>
                    
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-30 lg:pt-25 hidden lg:block'>
                    <Image src="/images/banner/y.png" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
