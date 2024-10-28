import { PropsWithChildren } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Guest({ children }: Readonly<PropsWithChildren>) {
    return (
        <>
            <header className="flex h-20 items-center justify-between overflow-hidden bg-white">
                {/* Logo */}
                <div className="flex items-center bg-white">
                    <img
                        src="/assets/images/logo.png"
                        alt="ZonaXpress Logo"
                        className="ml-6 mr-6 h-20"
                    />
                </div>
                <div className="inline-block h-0 w-0 border-b-[100px] border-l-[125px] border-r-0 border-t-0 border-solid border-b-zonablue border-l-transparent border-r-transparent border-t-transparent"></div>

                {/* Navigation Links */}
                <nav className="flex h-full w-full items-center justify-end space-x-8 bg-zonablue pr-10">
                    <a href="#" className="text-lg text-white hover:underline">
                        Beranda
                    </a>
                    <a href="#" className="text-lg text-white hover:underline">
                        Layanan
                    </a>
                    <a href="#" className="text-lg text-white hover:underline">
                        Klien
                    </a>
                    <a href="#" className="text-lg text-white hover:underline">
                        Tentang Kami
                    </a>
                    <a href="#" className="text-lg text-white hover:underline">
                        Kontak
                    </a>
                </nav>
            </header>
            {children}
            <footer className="z-10 bg-zonablue px-4 py-8 text-white">
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-4 rounded-lg bg-white">
                            <img
                                src="/assets/images/logo.png"
                                alt="Zonaxpress Logo"
                                className="w-32"
                            />
                        </div>
                        <p className="text-center md:text-left">
                            Zonaxpress adalah perusahaan penyedia logistik yang
                            mengedepan efisiensi dan efektivitas pendistribusian
                            barang cargo dan pos.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <FaFacebook size={24} />
                            <FaInstagram size={24} />
                            <FaTwitter size={24} />
                        </div>
                    </div>

                    {/* Layanan Section */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-4 text-xl font-bold">Layanan</h2>
                        <ul className="space-y-2">
                            <li>City Courier</li>
                            <li>Pengiriman Darat</li>
                            <li>Pengiriman Udara</li>
                            <li>Gudang Penampungan</li>
                        </ul>
                    </div>

                    {/* Tentang Kami Section */}
                    <div className="text-center md:text-left">
                        <h2 className="mb-4 text-xl font-bold">Tentang Kami</h2>
                        <p>Kantor Pusat Zonxpress</p>
                        <p>Perumahan Bumi Indah,</p>
                        <p>Jl. Krisan 4 Blok GL23 Kabupaten Tangerang 15660</p>
                        <p className="mt-4">Email: official@zonaxpress.co.id</p>
                        <p>Kontak Person: 0812-1011-1133</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p>Copyright ©zonaxpress 2024. All Right Reserve</p>
                </div>
            </footer>
        </>
    );
}
