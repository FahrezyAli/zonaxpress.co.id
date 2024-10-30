import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ServiceCard } from '@/components/ui/service-card';
import { Head } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';

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
                <h2 className="font-40 mb-4 text-3xl font-bold">
                    Layanan Kami
                </h2>
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
        </>
    );
}
