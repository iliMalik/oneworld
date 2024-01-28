import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "What is your refund policy?",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support?",
    response:
      "No, we dont offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    question:
      "What is your refund policy? If youre unhappy with your purchase for any reasonIf youre unhappy with your purchase for any reasonIf youre unhappy with your purchase for any reason",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    question: "What forms of payment do you accept?",
    response:
      "You can use any debit or credit card to pay for a subscription. We secure your card details and process payments via Stripe. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">Our Story</h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Founded as a Student Rental Housing Company in 2019, we adapted to the
        changing landscape during COVID-19, transitioning to short-term rentals.
        Partnering with Residential and Commercial Landlords through our Master
        Lease Partnership Agreement, we guarantee income, eliminate worries of
        tenant defaults, and remove eviction concerns.
      </p>
    </div>
  );
}
