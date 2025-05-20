'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const timelineData = [
  {
    image: '/images/ourteam/phone.png',
    alt: 'mj',
    text: 'M.J Bertorio',
  },
  {
    image: '/images/ourteam/phone.png',
    alt: 'r',
    text: 'Rahmat',
  },
];

export default function TimelineSection() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
  <h4 className="text-center text-xl lg:text-3xl text-black font-bold mb-6">
    Kontak Person
  </h4>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-16">
    {timelineData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row items-center text-center gap-4"
      >
        <Image src={item.image} alt={item.alt} width={60} height={60} />
        <h3 className="text-lg md:text-xl lg:text-1xl font-normal text-black">
          {item.text}
        </h3>
      </motion.div>
    ))}
  </div>
</div>

  );
}

