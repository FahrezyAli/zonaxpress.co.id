import { Button } from '@/components/ui/button';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

interface PacketFormData {
    sender: string;
    destination: string;
    receiver: string;
    packetType: string;
    weight: number;
    detail: string;
}

const packetTypes = ['Document', 'Electronics', 'Clothing', 'Food', 'Others'];

export default function Forms() {
    const [formData, setFormData] = useState<PacketFormData>({
        sender: '',
        destination: '',
        receiver: '',
        packetType: '',
        weight: 0,
        detail: '',
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        router.visit('/result');
    };

    return (
        <>
            <Head title="Forms" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
                >
                    <h2 className="mb-4 text-center text-2xl font-bold">
                        Packet Form
                    </h2>

                    <div className="mb-4">
                        <label
                            htmlFor="sender"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Sender
                        </label>
                        <input
                            type="text"
                            name="sender"
                            id="sender"
                            value={formData.sender}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter sender's name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="destination"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Destination
                        </label>
                        <input
                            type="text"
                            name="destination"
                            id="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter destination address"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="receiver"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Receiver
                        </label>
                        <input
                            type="text"
                            name="receiver"
                            id="receiver"
                            value={formData.receiver}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter receiver's name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="packetType"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Packet Type
                        </label>
                        <select
                            name="packetType"
                            id="packetType"
                            value={formData.packetType}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        >
                            <option value="" disabled>
                                Select Packet Type
                            </option>
                            {packetTypes.map((type, index) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="weight"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Packet Weight (Kg)
                        </label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter weight in Kg"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="detail"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Packet Detail
                        </label>
                        <textarea
                            name="detail"
                            id="detail"
                            value={formData.detail}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter packet details"
                            rows={3}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full rounded-md bg-zonablue px-4 py-2 text-white transition hover:bg-blue-500"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}
