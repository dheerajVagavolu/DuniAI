import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({
    id, name, topic, subject, duration, color
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="Bookmark Icon" width={20} height={20} />
            </button>
        </div>

        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="duration" width={14} height={14} />
            <p className="text-sm">{duration} mins</p>
        </div>

        <Link href={`/companions/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">Launch Session</button>
        </Link>
    </article>
  );
};

export default CompanionCard;
