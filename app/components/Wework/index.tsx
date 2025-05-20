"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'dr. Shinta Retno Kusumawati.,Sp.KJ',
        name: 'Narasumber I',
        imgSrc: '/images/wework/2.png',
    },
    {
        profession: ' apt. Taufiqurrohman, M.Clin.Pharm',
        name: 'Narasumber II',
        imgSrc: '/images/wework/1.png',
    },
]

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 7000,
            autoplaySpeed: 7000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-wework py-3">
                {/* Judul */}
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-1xl font-bold text-black my-3" style={{ textShadow: '5px 5px 4px rgba(0,0,0,0.3)' }}>
                            Narasumber
                        </h3>
                    </div>
                </div>

                {/* Carousel dibungkus dengan max-w-7xl */}
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                    <div className='relative'>
                                        <Image src={items.imgSrc} alt="gaby" width={350} height={382} className="inline-block m-auto" />
                                    </div>
                                    <h4 className='text-base sm:text-xl md:text-2xl font-bold pt-10 sm:pt-12 md:pt-14'>{items.name}</h4>
                                    <h3 className='text-base sm:text-xl md:text-1xl text-testColor pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 font-extralight'>{items.profession}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
