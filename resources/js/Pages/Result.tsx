import DefaultLayout from '@/Layouts/DefaultLayout';
import { Head } from '@inertiajs/react';

export default function Result() {
    // Mock data
    const mockData = {
        sender: 'John Doe',
        destination: '123 Main St, Springfield',
        receiver: 'Jane Smith',
        packetType: 'Cargo',
        weight: 15.5,
        detail: 'Fragile - Handle with care',
    };

    return (
        <DefaultLayout>
            <Head title="Result" />
            <div className="mx-auto my-16 max-w-sm rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <h2 className="mb-2 text-xl font-bold text-gray-700">
                    Shipping Label
                </h2>

                {/* Sender Information */}
                <div className="mb-4">
                    <p className="font-semibold text-gray-500">Sender:</p>
                    <p className="text-gray-700">{mockData.sender}</p>
                </div>

                {/* Receiver Information */}
                <div className="mb-4">
                    <p className="font-semibold text-gray-500">Receiver:</p>
                    <p className="text-gray-700">{mockData.receiver}</p>
                </div>

                {/* Destination */}
                <div className="mb-4">
                    <p className="font-semibold text-gray-500">Destination:</p>
                    <p className="text-gray-700">{mockData.destination}</p>
                </div>

                {/* Packet Type and Weight */}
                <div className="mb-4 flex justify-between">
                    <div>
                        <p className="font-semibold text-gray-500">
                            Packet Type:
                        </p>
                        <p className="text-gray-700">{mockData.packetType}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-500">Weight:</p>
                        <p className="text-gray-700">{mockData.weight} kg</p>
                    </div>
                </div>

                {/* Detail */}
                <div className="mb-4">
                    <p className="font-semibold text-gray-500">Detail:</p>
                    <p className="text-gray-700">{mockData.detail}</p>
                </div>

                {/* Mock QR Code */}
                <div className="flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-md border border-gray-400 bg-gray-200">
                        <span className="text-gray-400">QR Code</span>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
