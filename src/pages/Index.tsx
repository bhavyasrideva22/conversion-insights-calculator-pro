
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConversionCalculator from '../components/ConversionCalculator';
import CalculatorInfo from '../components/CalculatorInfo';
import { ChartBar } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-10">
        <section className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Landing Page Conversion Rate Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize your marketing performance with our professional conversion rate calculator.
            Make data-driven decisions to improve ROI and boost your business growth.
          </p>
        </section>
        
        <div className="mb-10 p-4 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center">
          <ChartBar className="text-primary mr-3 flex-shrink-0" size={24} />
          <p className="text-sm">
            <strong>Pro Tip:</strong> The average landing page conversion rate across industries is 2.35%, 
            but the top 25% of performers achieve 5.31% or higher. Use this calculator to see how your 
            campaigns compare and identify areas for improvement.
          </p>
        </div>
        
        <ConversionCalculator />
        <CalculatorInfo />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
