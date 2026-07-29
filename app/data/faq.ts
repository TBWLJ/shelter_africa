export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const propertyFAQs: FAQItem[] = [
  {
    id: "available-plot-sizes",
    question: "What plot sizes are available?",
    answer:
      "Shelter Africa 2 currently offers 300 sqm and 500 sqm plot options.",
  },
  {
    id: "plot-prices",
    question: "How much does a plot cost?",
    answer:
      "The 300 sqm plot is listed at ₦1,200,000, while the 500 sqm plot is listed at ₦2,000,000.",
  },
  {
    id: "initial-deposit",
    question: "What is the initial deposit?",
    answer:
      "The initial deposit listed for the property is ₦200,000. Please contact our team to confirm the current purchase terms and payment process.",
  },
  {
    id: "property-location",
    question: "Where is Shelter Africa 2 located?",
    answer:
      "Shelter Africa 2 is located along Abogunde Road in Ogbomoso, Oyo State, Nigeria.",
  },
  {
    id: "documentation",
    question: "What documentation is available?",
    answer:
      "The property information provided to us references a Registered Survey and a Deed of Assignment. Contact our team for detailed information about the documentation available for your selected plot.",
  },
  {
    id: "reserve-plot",
    question: "How do I reserve a plot?",
    answer:
      "You can contact our team through the contact page to enquire about availability, confirm the current terms, and begin the process of securing your preferred plot.",
  },
  {
    id: "visit-property",
    question: "Can I visit the property?",
    answer:
      "Please contact our team to arrange a property visit and confirm the available viewing arrangements.",
  },
];