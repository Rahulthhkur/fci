import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What technology services does FutureCore specialize in?",
      answer: "FutureCore specializes in custom software development, cloud infrastructure management, comprehensive cybersecurity solutions, and implementing AI & machine learning systems. Our team brings extensive experience across various industries to deliver tailored technology solutions that drive business growth."
    },
    {
      question: "How does your software development process work?",
      answer: "Our software development process follows an agile methodology with six key phases: discovery and planning, design, development, testing, deployment, and ongoing maintenance. We maintain transparent communication throughout, with regular updates and demonstrations to ensure the final product aligns perfectly with your vision."
    },
    {
      question: "What industries do you typically work with?",
      answer: "We serve clients across diverse sectors including finance, healthcare, retail, manufacturing, and education. Our solutions are customized to address industry-specific challenges while leveraging our technical expertise to create innovative solutions regardless of the sector."
    },
    {
      question: "How do you approach data security and privacy?",
      answer: "Security is fundamental to everything we build. We implement industry-leading encryption protocols, conduct regular security audits, and follow best practices for secure coding. All our solutions comply with relevant regulations including GDPR, HIPAA, and other data protection standards applicable to your industry."
    },
    {
      question: "What is the typical timeline for project completion?",
      answer: "Project timelines vary based on scope and complexity. Small to medium projects typically take 2-4 months, while enterprise-scale solutions may require 6-12 months. During our initial consultation, we'll provide a detailed timeline estimate based on your specific requirements and priorities."
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our services and technology solutions. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 relative max-w-lg mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-gray-500 h-5 w-5" />
            <Input 
              placeholder="Search for answers..." 
              className="pl-10 bg-gray-900 border-gray-800 text-gray-300 focus-visible:ring-blue-500 focus-visible:ring-offset-black"
            />
            <Button className="absolute right-1 bg-blue-600 hover:bg-blue-700 text-white px-4">
              Search
            </Button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-gray-900 rounded-xl p-1 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-800 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-gray-100 hover:text-blue-400 py-5 px-4 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 px-4 pb-5 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:text-black border border-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 rounded group relative overflow-hidden">
              Contact Support
            </Button>
            <Button variant="primary" className="bg-gray-900 hover:bg-gray-800 text-gray-300">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;