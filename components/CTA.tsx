import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Meet your voice-powered AI companion.</div>
      <h2 className="text-3xl font-bold">Build Your Own AI Learning Guide</h2>
      <p>
        Choose your focus, and let a natural, voice-powered AI support you with
        real-world challenges, feedback, and encouragement—as you write, speak,
        and grow.
      </p>
      <button className="btn-primary">
        {/* <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/> */}
        <Link href="/companions/new">
          <p>Start Learning</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
