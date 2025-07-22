"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const workExperiences = [
    {
        id: 1,
        avatars: [
            "/media/company/1.webp",
            "/media/company/2.webp",
            "/media/company/3.webp",
            "/media/company/4.webp",
        ],
        role: "Full-stack Developer",
        company: "Freelancer",
        date: "Jul 2018 — Present",
        location: "Sakai, Osaka, Japan",
        description:
            "Designed and built full-stack web solutions for international clients, focusing on clean code, fast performance, and responsive design. Consistently earned positive feedback and long-term partnerships by delivering on time and exceeding client expectations.",
        avatarBg: "bg-gradient-to-br from-[#FFB75E] to-[#ED8F03]",
    },
    {
        id: 2,
        avatars: [
            "/media/company/5.webp",
            "/media/company/6.webp",
            "/media/company/7.webp",
        ],
        role: "Backend Enginner",
        company: "SCI.co., Ltd",
        date: "Nov 2016 — Jul 2018",
        location: "Yodogawa, Osaka, Japan",
        description:
            "Developed secure, scalable backend systems using PHP and Laravel for business applications. \nEarned recognition from board members for contributing to key releases and improving backend efficiency.",
        avatarBg: "bg-[#0077B5]",
    },
];

export default function WorkExperienceCard() {
    const [currentAvatarIndex, setCurrentAvatarIndex] = useState({});
    const [clickedMap, setClickedMap] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAvatarIndex((prev) => {
                const newIndexes = { ...prev };
                workExperiences.forEach((exp) => {
                    if (!clickedMap[exp.id]) {
                        const current = prev[exp.id] || 0;
                        newIndexes[exp.id] = (current + 1) % exp.avatars.length;
                    }
                });
                return newIndexes;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [clickedMap]);

    const handleAvatarClick = (expId, avatarsLength) => {
        setClickedMap((prev) => ({ ...prev, [expId]: true }));
        setCurrentAvatarIndex((prev) => ({
            ...prev,
            [expId]: (prev[expId] || 0) + 1 >= avatarsLength ? 0 : (prev[expId] || 0) + 1,
        }));
    };

    return (
        <div className="w-full my-4 rounded-xl border border-[#E0DFDC] bg-white shadow-sm p-4">
            {workExperiences.map((exp) => (
                <div key={exp.id} className="border-b border-[#F4F4F4] p-4 last:border-0">
                    <div className="flex gap-8">
                        <div
                            className={`relative h-[5rem] w-[5rem] shrink-0 overflow-hidden rounded-full ${exp.avatarBg}`}
                            onClick={() => handleAvatarClick(exp.id, exp.avatars.length)}
                        >
                            <Image
                                src={exp.avatars[currentAvatarIndex[exp.id] || 0]}
                                alt="avatar"
                                fill
                                className="object-cover cursor-pointer"
                            />
                        </div>

                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-[#181818]">{exp.role}</h3>
                            <div className="mt-0.5 flex flex-wrap text-[0.9rem] text-[#181818]">
                                <span className="mr-2 font-semibold text-[#0077B5]">{exp.company}</span>|
                                <span className="mx-2 font-normal">{exp.location}</span>|
                                <span className="mx-2 text-[#181818]">{exp.date}</span>
                            </div>
                            <p className="mt-2 w-full text-[1rem] text-[#181818] leading-[1.5]">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
