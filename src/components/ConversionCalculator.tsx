
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Calculator, Download, Mail, ChevronDown, ChevronUp, BadgeIndianRupee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

type FormData = {
  visitors: number;
  conversions: number;
  averageOrderValue: number;
  adSpend: number;
};

const initialFormData: FormData = {
  visitors: 1000,
  conversions: 25,
  averageOrderValue: 2500,
  adSpend: 10000,
};

const ConversionCalculator = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [conversionRate, setConversionRate] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [roi, setRoi] = useState(0);
  const [costPerConversion, setCostPerConversion] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isCalculated) {
      calculateResults();
    }
  }, [formData, isCalculated]);

  const calculateResults = () => {
    // Calculate conversion rate
    const cr = (formData.conversions / formData.visitors) * 100;
    setConversionRate(parseFloat(cr.toFixed(2)));

    // Calculate total revenue
    const revenue = formData.conversions * formData.averageOrderValue;
    setTotalRevenue(revenue);

    // Calculate ROI
    const returnOnInvestment = ((revenue - formData.adSpend) / formData.adSpend) * 100;
    setRoi(parseFloat(returnOnInvestment.toFixed(2)));

    // Calculate cost per conversion
    const cpc = formData.adSpend / formData.conversions;
    setCostPerConversion(parseFloat(cpc.toFixed(2)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0,
    });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
    calculateResults();
  };

  const formatIndianRupee = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSendEmail = () => {
    if (!isCalculated) {
      toast({
        title: "No results to send",
        description: "Please calculate results first before sending an email.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would connect to a backend API
    toast({
      title: "Email feature",
      description: "Results would be emailed. This is a demo feature.",
    });
  };

  const handleDownloadPDF = () => {
    if (!isCalculated) {
      toast({
        title: "No results to download",
        description: "Please calculate results first before downloading.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would generate a PDF
    toast({
      title: "Download feature",
      description: "PDF would be generated and downloaded. This is a demo feature.",
    });
  };

  const barChartData = [
    {
      name: 'Conversion Rate',
      value: conversionRate,
      fill: '#245e4f',
    },
    {
      name: 'Total Revenue (₹1000s)',
      value: totalRevenue / 1000,
      fill: '#7ac9a7',
    },
    {
      name: 'Cost Per Conversion (₹100s)',
      value: costPerConversion / 100,
      fill: '#e9c46a',
    },
  ];

  const pieChartData = [
    { name: 'Revenue', value: totalRevenue, fill: '#7ac9a7' },
    { name: 'Ad Spend', value: formData.adSpend, fill: '#e9c46a' },
  ];

  return (
    <div className="calculator-card animate-fade-in">
      <div className="flex items-center mb-4">
        <Calculator className="mr-2 text-primary" size={24} />
        <h2 className="section-heading">Landing Page Conversion Rate Calculator</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label htmlFor="visitors" className="block text-sm font-medium mb-1">
                Number of Visitors
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="visitors"
                  name="visitors"
                  value={formData.visitors}
                  onChange={handleInputChange}
                  className="input-field"
                  min="1"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="conversions" className="block text-sm font-medium mb-1">
                Number of Conversions
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="conversions"
                  name="conversions"
                  value={formData.conversions}
                  onChange={handleInputChange}
                  className="input-field"
                  min="0"
                  max={formData.visitors}
                  required
                />
              </div>
              {formData.conversions > formData.visitors && (
                <p className="text-red-500 text-xs mt-1">
                  Conversions cannot exceed the number of visitors.
                </p>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowAdvancedFields(!showAdvancedFields)}
                className="flex items-center text-primary font-medium mb-2"
              >
                Advanced Options
                {showAdvancedFields ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </button>

              {showAdvancedFields && (
                <div className="space-y-4 border-l-2 border-secondary pl-4 py-2 animate-fade-in">
                  <div>
                    <label htmlFor="averageOrderValue" className="block text-sm font-medium mb-1">
                      Average Order Value (₹)
                    </label>
                    <div className="relative">
                      <BadgeIndianRupee className="absolute left-3 top-2.5 text-gray-500" size={18} />
                      <input
                        type="number"
                        id="averageOrderValue"
                        name="averageOrderValue"
                        value={formData.averageOrderValue}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adSpend" className="block text-sm font-medium mb-1">
                      Ad Spend / Marketing Cost (₹)
                    </label>
                    <div className="relative">
                      <BadgeIndianRupee className="absolute left-3 top-2.5 text-gray-500" size={18} />
                      <input
                        type="number"
                        id="adSpend"
                        name="adSpend"
                        value={formData.adSpend}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button type="submit" className="btn-primary flex-1">
                Calculate Results
              </button>
            </div>
          </form>

          {isCalculated && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary mb-4">Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Conversion Rate:</span>
                  <span className="font-semibold">{conversionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Revenue:</span>
                  <span className="font-semibold">{formatIndianRupee(totalRevenue)}</span>
                </div>
                {showAdvancedFields && (
                  <>
                    <div className="flex justify-between">
                      <span className="font-medium">Return on Investment (ROI):</span>
                      <span className="font-semibold">{roi}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cost Per Conversion:</span>
                      <span className="font-semibold">{formatIndianRupee(costPerConversion)}</span>
                    </div>
                  </>
                )}
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleSendEmail}
                  className="btn-outline flex items-center justify-center gap-1 flex-1"
                >
                  <Mail size={18} />
                  <span>Email Results</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="btn-accent flex items-center justify-center gap-1 flex-1"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          {isCalculated ? (
            <>
              <h3 className="section-subheading text-center mb-4">Conversion Analytics Visualization</h3>
              <div className="h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-25} textAnchor="end" height={70} />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}`, '']} />
                    <Bar dataKey="value">
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {showAdvancedFields && (
                <>
                  <h3 className="section-subheading text-center mt-6 mb-4">Revenue vs. Ad Spend</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                        <Tooltip formatter={(value) => [formatIndianRupee(value as number), '']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <Calculator size={48} className="text-secondary mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">No Data to Visualize Yet</h3>
              <p className="text-gray-400">
                Fill out the form and click "Calculate Results" to see the visualization.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversionCalculator;
