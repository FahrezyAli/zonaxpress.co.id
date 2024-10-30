import { Button } from '@headlessui/react';
import { FC } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';

const ServiceCard: FC<{ title: string; description: string; icon: string }> = ({
    title,
    description,
    icon,
}) => (
    <Card className="border-2 border-zonared">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row">
            <img
                src={icon}
                alt={title}
                className="mr-4 h-32 w-32 text-red-500"
            />
            <p className="mb-6 text-gray-700">{description}</p>
        </CardContent>
        <CardFooter className="">
            <Button className="rounded-full bg-zonared px-4 py-2 text-white hover:bg-red-600">
                Selengkapnya
            </Button>
        </CardFooter>
    </Card>
);

export { ServiceCard };
