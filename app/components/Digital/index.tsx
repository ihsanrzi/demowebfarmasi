'use client';

import Image from "next/image";

interface BenefitItem {
  icon: string;
  text: string;
}

interface PackageCardProps {
  title: string;
  subtitle: string;
  price: string;
  benefits: BenefitItem[];
}

const PackageCard: React.FC<PackageCardProps> = ({ title, subtitle, price, benefits }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-xl p-6 w-full h-full min-h-[500px] text-center text-sm transition hover:shadow-2xl">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="text-lg text-gray-500">{subtitle}</p>

      <div className="my-6">
        <p className="text-4xl font-extrabold text-black">{price}</p>
      </div>

      <div className="mb-6">
        <p className="text-xl font-semibold mb-4">Benefit :</p>
        <ul className="space-y-4 text-left">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <Image src={benefit.icon} alt={`benefit-${index}`} width={32} height={32} />
              <span className="text-base text-gray-700">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-3 mt-auto bg-gold text-white font-semibold rounded-2xl hover:bg-black hover:shadow-xl transition">
        Daftar Sekarang
      </button>
    </div>
  );
};

const Digital: React.FC = () => {
  const packages: PackageCardProps[] = [
    {
      title: 'PAKET 1',
      subtitle: 'Seminar Only',
      price: 'Rp.25.000',
      benefits: [
        { icon: '/images/digital/1.png', text: 'Ilmu dan Jejaring' },
        { icon: '/images/digital/2.png', text: 'Publikasi Ilmiah diProsiding dan Jurnal Nasional' },
        { icon: '/images/digital/3.png', text: 'e-Sertifikat ber-SKP Kementrian kesehatan' }
      ]
    },
    {
      title: 'PAKET 2',
      subtitle: 'Seminar + Presenter',
      price: 'Rp.100.000',
      benefits: [
        { icon: '/images/digital/1.png', text: 'Ilmu dan Jejaring' },
        { icon: '/images/digital/2.png', text: 'Publikasi Ilmiah diProsiding dan Jurnal Nasional' },
        { icon: '/images/digital/3.png', text: 'e-Sertifikat ber-SKP Kementrian kesehatan' }
      ]
    },
    {
      title: 'PAKET 3',
      subtitle: 'Presenter Only',
      price: 'Rp.75.000',
      benefits: [
        { icon: '/images/digital/1.png', text: 'Ilmu dan Jejaring' },
        { icon: '/images/digital/2.png', text: 'Publikasi Ilmiah diProsiding dan Jurnal Nasional' },
        { icon: '/images/digital/3.png', text: 'e-Sertifikat ber-SKP Kementrian kesehatan' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <PackageCard key={idx} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Digital;
