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
        
        <h2 className="text-2xl font-bold">{name}</h2>
        {/* <p className="text-sm">{topic}</p> */}
        

        <Link href={`/companions/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">Start Practice</button>
        </Link>
    </article>
  );
};

export default CompanionCard;
