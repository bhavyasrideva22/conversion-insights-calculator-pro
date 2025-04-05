
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CalculatorInfo = () => {
  const [expanded, setExpanded] = useState({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggleSection = (section: string) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section as keyof typeof expanded],
    });
  };

  return (
    <div className="mt-12 calculator-card">
      <h2 className="section-heading">Understanding Landing Page Conversion Rate</h2>
      
      <div className="space-y-6">
        <div>
          <button 
            onClick={() => toggleSection('section1')} 
            className="flex w-full items-center justify-between text-lg font-semibold text-primary py-2"
          >
            <span>What is Landing Page Conversion Rate?</span>
            {expanded.section1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expanded.section1 && (
            <div className="mt-2 text-gray-700 animate-fade-in">
              <p className="mb-4">
                The landing page conversion rate is a crucial metric for businesses to measure the effectiveness of their digital marketing efforts. It represents the percentage of visitors who complete a desired action on your landing page, such as making a purchase, signing up for a newsletter, downloading a resource, or filling out a contact form.
              </p>
              <p className="mb-4">
                Mathematically, conversion rate is calculated by dividing the number of conversions by the total number of visitors, then multiplying by 100 to get a percentage:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-center mb-4">
                <p className="font-semibold">Conversion Rate (%) = (Number of Conversions / Number of Visitors) × 100</p>
              </div>
              <p>
                For example, if your landing page receives 5,000 visitors in a month and 150 of those visitors convert, your conversion rate would be (150 ÷ 5,000) × 100 = 3%.
              </p>
            </div>
          )}
        </div>
        
        <div>
          <button 
            onClick={() => toggleSection('section2')} 
            className="flex w-full items-center justify-between text-lg font-semibold text-primary py-2"
          >
            <span>Why Conversion Rate Matters for Your Business</span>
            {expanded.section2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expanded.section2 && (
            <div className="mt-2 text-gray-700 animate-fade-in">
              <p className="mb-4">
                Conversion rate is more than just a metric—it's a direct indicator of your marketing effectiveness and overall business health. Here's why it matters:
              </p>
              
              <h4 className="font-semibold mb-2">1. Measure Marketing Effectiveness</h4>
              <p className="mb-4">
                Conversion rates help you understand how well your marketing campaigns are performing. A high conversion rate suggests that your messaging, targeting, and offer resonate with your audience, while a low rate indicates areas for improvement.
              </p>
              
              <h4 className="font-semibold mb-2">2. Optimize Ad Spend and ROI</h4>
              <p className="mb-4">
                By tracking conversion rates alongside your marketing costs, you can calculate key metrics like Cost Per Acquisition (CPA) and Return on Investment (ROI). This helps you allocate your budget more efficiently toward the channels and campaigns that deliver the best results.
              </p>
              
              <h4 className="font-semibold mb-2">3. Identify User Experience Issues</h4>
              <p className="mb-4">
                Low conversion rates may signal problems with your landing page design, loading speed, mobile responsiveness, or form complexity. By monitoring conversion rates, you can identify and address these issues to create a more seamless user experience.
              </p>
              
              <h4 className="font-semibold mb-2">4. Benchmark Performance</h4>
              <p>
                Conversion rates provide a baseline to measure improvements against. As you optimize your landing pages and marketing strategies, you can use conversion rate trends to track your progress over time.
              </p>
            </div>
          )}
        </div>
        
        <div>
          <button 
            onClick={() => toggleSection('section3')} 
            className="flex w-full items-center justify-between text-lg font-semibold text-primary py-2"
          >
            <span>How to Improve Your Conversion Rate</span>
            {expanded.section3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expanded.section3 && (
            <div className="mt-2 text-gray-700 animate-fade-in">
              <p className="mb-4">
                Improving your landing page conversion rate is an ongoing process of testing, learning, and optimization. Here are some proven strategies to boost your conversion rates:
              </p>
              
              <h4 className="font-semibold mb-2">1. Craft Clear and Compelling Headlines</h4>
              <p className="mb-4">
                Your headline is the first thing visitors see. Make it clear, concise, and focused on the primary benefit for your audience. A strong headline can significantly impact your conversion rate by immediately communicating value.
              </p>
              
              <h4 className="font-semibold mb-2">2. Simplify Your Forms</h4>
              <p className="mb-4">
                Each additional field in your form can reduce conversion rates. Collect only the information you absolutely need. Consider multi-step forms for complex processes to make the initial commitment feel smaller.
              </p>
              
              <h4 className="font-semibold mb-2">3. Use Strong Call-to-Action Buttons</h4>
              <p className="mb-4">
                Your CTA button should stand out visually and use action-oriented language that clearly communicates what happens next. Test different colors, sizes, and copy to find what works best.
              </p>
              
              <h4 className="font-semibold mb-2">4. Add Social Proof</h4>
              <p className="mb-4">
                Include testimonials, reviews, case studies, or trust badges to build credibility and reduce perceived risk. People are more likely to convert when they see that others have had positive experiences.
              </p>
              
              <h4 className="font-semibold mb-2">5. Optimize Page Loading Speed</h4>
              <p className="mb-4">
                A one-second delay in page load time can reduce conversions by 7%. Compress images, minimize code, and leverage browser caching to ensure your landing page loads quickly.
              </p>
              
              <h4 className="font-semibold mb-2">6. Implement A/B Testing</h4>
              <p>
                Regularly test different versions of your landing page to identify what elements drive better conversion rates. Test one element at a time (headline, imagery, form length, CTA placement) to clearly understand what changes make a difference.
              </p>
            </div>
          )}
        </div>
        
        <div>
          <button 
            onClick={() => toggleSection('section4')} 
            className="flex w-full items-center justify-between text-lg font-semibold text-primary py-2"
          >
            <span>Advanced Metrics: Beyond Basic Conversion Rate</span>
            {expanded.section4 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expanded.section4 && (
            <div className="mt-2 text-gray-700 animate-fade-in">
              <p className="mb-4">
                While conversion rate is a fundamental metric, combining it with other data points provides a more comprehensive view of your marketing performance:
              </p>
              
              <h4 className="font-semibold mb-2">1. Cost Per Conversion (CPC)</h4>
              <p className="mb-4">
                CPC measures how much you're spending to acquire each conversion. Calculate it by dividing your total ad spend by the number of conversions. This helps you understand the efficiency of your marketing budget.
              </p>
              
              <h4 className="font-semibold mb-2">2. Return on Ad Spend (ROAS)</h4>
              <p className="mb-4">
                ROAS measures the revenue generated for every rupee spent on advertising. Calculate it by dividing revenue by ad spend, then multiplying by 100 to get a percentage. A ROAS of 300% means you're earning ₹3 for every ₹1 spent on ads.
              </p>
              
              <h4 className="font-semibold mb-2">3. Value Per Visit (VPV)</h4>
              <p className="mb-4">
                VPV measures the average value generated by each visitor to your landing page. Calculate it by multiplying your conversion rate by your average transaction value. This helps you understand the true worth of your traffic.
              </p>
              
              <h4 className="font-semibold mb-2">4. Conversion Rate by Traffic Source</h4>
              <p className="mb-4">
                Different traffic sources (organic search, paid social, email, etc.) often convert at different rates. Segment your conversion analysis by source to identify your most valuable traffic channels.
              </p>
              
              <h4 className="font-semibold mb-2">5. Secondary Conversion Actions</h4>
              <p>
                Beyond your primary goal, track "micro-conversions" like email sign-ups, resource downloads, or video views. These secondary actions help build a more complete picture of how users engage with your content before making larger commitments.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorInfo;
