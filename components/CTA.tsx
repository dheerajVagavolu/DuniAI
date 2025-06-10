import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
            <div className="cta-badge">Start learning your way.</div>
            <h2 className="text-3xl font-bold">
                Design Your Own AI Learning Companion
            </h2>
            <p>Choose a niche, and let your personalized AI agent guide you with real-world challenges and feedback — no burnout, just progress.</p>
            <button className="btn-primary">
                {/* <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/> */}
                <Link href="/companions/new">
                    <p>Start Learning</p>
                </Link>
            </button>
        </section>
  )
};

export default CTA;
