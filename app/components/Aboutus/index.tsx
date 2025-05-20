import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Akademisi",
        imgSrc: "/images/aboutus/akademisi.png",
        paragraph: '',
        link: ''
    },
    {
        heading: "Praktisi",
        imgSrc: "/images/aboutus/praktisi.png",
        paragraph: '',
        link: ''
    },
    {
        heading: "Mahasiswa",
        imgSrc: "/images/aboutus/mahasiswa.png",
        paragraph: '',
        link: ''
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-6xl px-4 py-24 my-32 lg:px-10 bg-offwhite rounded-3xl'>
                <h4 className='text-center text-4xl lg:text-4xl text-gold font-bold'>Call For Paper</h4>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-gold bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group text-center'>
                            <h4 className='text-xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={150} height={120}className="inline-block m-auto" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;