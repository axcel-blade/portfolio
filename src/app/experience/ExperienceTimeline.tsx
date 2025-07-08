'use client';
//import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: 'Uber Delivery Drivery',
        company: 'Uber',
        date: 'March 2025 - Present',
        description: 'Performed timely and efficient food deliveries across the Perth metro area while ensuring excellent customer service. Managed multiple orders, navigated routes effectively, and upheld safety standards. Demonstrated strong time management and communication skills in a fast-paced, on-demand environment.',
    },
    {
        title: 'Professional Cleaner',
        company: 'Heyas Cleaning Services',
        date: 'April 2025 - May 2025',
        description: 'Carried out cleaning tasks across residential or commercial spaces while following Australian workplace health and safety standards. Adapted quickly to new environments and balanced work with full-time university studies.',
    },
    {
        title: 'Kitchen Assistant',
        company: 'La Casa Cafe & Restaurant',
        date: 'November 2022 - January 2023',
        description: 'Supported kitchen operations by assisting in food preparation, maintaining cleanliness, and ensuring safety compliance. Worked collaboratively under pressure during busy service periods, contributing to timely and quality food delivery.',
    },
    {
        title: 'Computer Technician',
        company: 'Ferx Computers',
        date: 'July 2019 - February 2025',
        description: 'managed fast-paced kitchen operations during peak hours, demonstrating ability to work efficiently under pressure while maintain quality standards',
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6 ml-4">
        {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 relative">
            {/*<span className="absolute -left-[22px] top-1">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full text-white">
                <Briefcase size={14} />
                </span>
            </span>*/}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.company} • {exp.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
        ))}
        </div>
    );
}