import './App.css';
import HeroSection from './Componet/HeroSection';
import FeatureGrid from './Componet/FeatureGrid';
import CoreTechnologies from './Componet/CoreTechnologies';
import ExploreTemplate from './Componet/ExploreTemplate';
import Dashboard from './Componet/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import CTASection from './Componet/CTASection';

function App() {
  return (
    <ThemeProvider>
      <HeroSection />
      <FeatureGrid />
      <Dashboard />
      <CoreTechnologies />
      <ExploreTemplate />
      <CTASection/>
    </ThemeProvider>
  );
}

export default App;
