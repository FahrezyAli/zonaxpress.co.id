import { BenefitCard } from '@/components/ui/benefit-card';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ServiceCard } from '@/components/ui/service-card';
import { Head } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';

const partners = [
    { name: 'PT. Adhya Avia Prima', logo: '/assets/logos/aap.png' },
    { name: 'SPL Cargo', logo: '/assets/logos/spl.png' },
    { name: 'MJP Cargo', logo: '/assets/logos/mjp.png' },
    { name: 'CKL Cargo', logo: '/assets/logos/ckl.png' },
    { name: 'LC Express', logo: '/assets/logos/lc.png' },
    { name: 'MSA Kargo', logo: '/assets/logos/msa.png' },
];

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative overflow-hidden text-center">
                {/* Text Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center font-bold text-white">
                    <h1 className="font-outline-2 font-lora text-8xl font-bold text-zonared">
                        JAGONYA KIRIM BARANG
                    </h1>
                    <p className="font-outline-1 mt-2 text-4xl font-bold text-zonared">
                        Perusahaan Cargo Yang Memiliki Komitmen untuk memberikan
                        <br />
                        Pelayanan yang terbaik untuk konsumen
                    </p>
                    <Button className="mt-4 rounded-md bg-zonared px-6 py-2 text-white shadow-md hover:bg-red-700 focus:outline-none">
                        Hubungi Kami
                    </Button>
                </div>

                <Carousel
                    opts={{
                        loop: true,
                        watchDrag: false,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent className="-ml-0">
                        <CarouselItem className="pl-0">
                            <img
                                src="/assets/images/carousel1.png"
                                alt="Carousel 1"
                                className="h-full w-full object-cover opacity-75"
                            />
                        </CarouselItem>
                        <CarouselItem className="pl-0">
                            <img
                                src="/assets/images/carousel2.png"
                                alt="Carousel 2"
                                className="h-full w-full object-cover opacity-75"
                            />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

                <div className="absolute -bottom-48 overflow-hidden opacity-70">
                    <img
                        src="/assets/images/wave-effect.png"
                        alt="Wave Effect"
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="mb-4 text-3xl font-bold">Layanan Kami</h2>
                <p className="mb-8 text-gray-600">
                    Kami menawarkan berbagai layanan <br />
                    pengiriman yang paling sesuai dengan <br />
                    kebutuhan Anda.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <ServiceCard
                        title="City Courier"
                        description="Dengan menggunakan armada dan rute yang diminta dan disepakati bersama oleh pelanggan, dan dengan tim operasional yang terlatih, service City courier membuat bisnis anda semakin mudah dan item barang aman dan delivery on time"
                        icon="/assets/icons/city.png"
                    />
                    <ServiceCard
                        title="Pengiriman Darat"
                        description="Layanan moda transportasi Darat adalah jenis layanan distribusi (pengiriman) dengan waktu pengiriman normal dibandingkan dengan layanan transportasi via Laut. Umumnya paket atau barang yang sifatnya reguler atau jangka waktu yang digunakan oleh user, gengan harga yang kompetitif dan efisien"
                        icon="/assets/icons/truck.png"
                    />
                    <ServiceCard
                        title="Pengiriman Udara"
                        description="Layanan via moda transportasi via Udara adalah jenis layanan distribusi (pengiriman) dengan waktu pengiriman lebih cepat dibandingkan dengan layanan transportasi via darat"
                        icon="/assets/icons/aircraft.png"
                    />
                    <ServiceCard
                        title="Gudang Penyimpanan"
                        description="Gudang berikat untuk pergerakan cepat kargo Anda"
                        icon="/assets/icons/warehouse.png"
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="mb-8 text-3xl font-bold">MENGAPA KAMI?</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <BenefitCard
                        title="CEPAT"
                        description="Kami menyediakan semua jenis armada sesuai dengan permintaan kebutuhan pelanggan."
                        icon="/assets/icons/speed.png"
                    />
                    <BenefitCard
                        title="HEMAT"
                        description="Biaya layanan yang lebih hemat dengan selalu menyesuaikan kebutuhan spesifik Anda."
                        icon="/assets/icons/cost.png"
                    />
                    <BenefitCard
                        title="AMAN"
                        description="Dengan Customer Service Support akan memberi kemudahan untuk melakukan monitor dan Control."
                        icon="/assets/icons/security.png"
                    />
                </div>
            </div>
            <div className="py-8 text-center">
                <h2 className="bg-zonared text-2xl font-bold text-white">
                    Siap Bekerjasama Dengan Kami?
                </h2>
                <p className="mb-6 mt-2 text-lg font-semibold">
                    Perusahaan Yang Sudah Menggunakan Jasa Kami
                </p>

                <div className="flex flex-wrap justify-center gap-8 px-4">
                    {partners.map((partner, index) => (
                        <img
                            key={index}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-20 w-auto"
                        />
                    ))}
                </div>

                <Button className="mt-10 rounded-full bg-zonared px-6 py-2 text-white shadow-md hover:bg-red-700 focus:outline-none">
                    Hubungi Kami
                </Button>
            </div>
        </>
    );
}
