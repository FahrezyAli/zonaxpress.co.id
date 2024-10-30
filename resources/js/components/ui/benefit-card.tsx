import { FC } from 'react';

const BenefitCard: FC<{ title: string; description: string; icon: string }> = ({
    title,
    description,
    icon,
}) => (
    <div className="flex flex-col items-center text-center">
        <img src={icon} alt={title} className="mb-4 h-32 w-auto text-red-500" />
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

export { BenefitCard };
