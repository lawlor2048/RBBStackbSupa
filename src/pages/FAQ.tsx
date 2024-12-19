import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What speeds can I expect from your broadband service?',
      answer: 'Our broadband speeds range from 100Mbps to 1Gbps for residential customers, and up to 10Gbps for business customers. The actual speed available depends on your location and the package you choose.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Standard installation typically takes 5-10 working days from order confirmation. Our professional technicians will handle everything to ensure a smooth setup.'
    },
    {
      question: 'Do you have a minimum contract period?',
      answer: 'Yes, our standard contracts are 12 months for residential services and 24 months for business services. We also offer flexible terms for specific requirements.'
    },
    {
      question: 'What happens if I have technical issues?',
      answer: 'Our dedicated support team is available Monday to Friday, 9am-6pm, and Saturday 10am-2pm. You can reach us by phone, email, or live chat for immediate assistance.'
    },
    {
      question: 'Do you provide a router?',
      answer: 'Yes, we provide a high-quality router with all our broadband packages. The router is preconfigured for optimal performance with our network.'
    },
    {
      question: 'Can I keep my existing phone number?',
      answer: 'Yes, you can port your existing phone number to our service. This process typically takes 5-7 working days to complete.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards and direct debit payments. Business customers can also arrange invoice payment terms.'
    },
    {
      question: 'Is there a usage limit or fair usage policy?',
      answer: 'Our residential packages come with truly unlimited data. Business packages are also unlimited but subject to our fair usage policy for network management.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="relative bg-[#2f3676] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions about our services.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#2f3676]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#2f3676]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}