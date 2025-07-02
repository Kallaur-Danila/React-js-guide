import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedBackSection from './components/FieldBackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'


export default function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
    <Header />
    <main>
    <IntroSection active/>

    <TabsSection active={tab} onChange={(current) => setTab(current)} />

    {tab === 'main' &&
     <>
      <TeachingSection />
      <DifferencesSection />
    </>}

    {tab === 'feedback' && <FeedBackSection />}

    {tab === 'effect' && <EffectSection />}
    </main>
    </>
  ) 
}

