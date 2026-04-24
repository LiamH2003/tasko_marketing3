import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemStatementSection from './components/ProblemStatementSection'
import AppPromisesSection from './components/AppPromisesSection'
import IntroductionSection from './components/IntroductionSection'
import StatsSection from './components/StatsSection'
import ParentSection from './components/ParentSection'
import CompetitorComparisonSection from './components/CompetitorComparisonSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import EmailModal from './components/EmailModal'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemStatementSection />
        <AppPromisesSection />
        <IntroductionSection />
        <StatsSection />
        <ParentSection />
        <CompetitorComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <EmailModal />
      </main>
      <Footer />
    </>
  )
}
