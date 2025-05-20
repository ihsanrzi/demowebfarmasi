import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">
            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/goals.png" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-base lg:text-4xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">MAKSUD DAN TUJUAN</h2>
                        <p className="font-medium text-darkpurple text-base mt-5 text-center lg:text-start">Kegiatan ini bertujuan untuk meningkatkan pengetahuan dan kesadaran masyarakat serta memperluas kontribusi akademik dalam 
                            isu kesehatan mental melalui webinar nasional, publikasi prosiding hasil Call for Paper, dan kolaborasi lintas disiplin antara akademisi, praktisi, dan mahasiswa.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
