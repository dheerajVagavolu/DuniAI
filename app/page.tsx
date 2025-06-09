import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className="text-2l underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="1"
          name="Fine-Tuning LLMs"
          topic="Topic One"
          subject="Subject One"
          duration={45}
          color="#FFF9C4" // soft pastel yellow
        />
        <CompanionCard 
          id="2"
          name="Pandas in AI"
          topic="Topic Two"
          subject="Subject Two"
          duration={30}
          color="#B3E5FC" // soft pastel blue
        />
        <CompanionCard 
          id="3"
          name="Numpy"
          topic="Topic Three"
          subject="Subject Three"
          duration={60}
          color="#C8E6C9" // soft pastel green
        />
      </section>
      <section className="home-section">
        <CompanionsList 
          title="Recently Solved Problems"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page