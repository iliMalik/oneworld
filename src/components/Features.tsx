import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Building Trust Through Experience",
    description:
      "Trust is the cornerstone of our relationships. With a foundation built on trust, we prioritize maintaining your property's integrity. Our deep industry knowledge ensures thorough guest screening and preemptive safety measures. Your property is not just an asset; it's our responsibility.",
    features: ["Expeirence ", "Screening", "Professionalism"],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "State-of-the-Art Security Measures",
    description:
      "Ensure safety with advanced security features. Each unit is equipped with Ring Video cameras at the entrance, 24/7 monitoring, noise detectors for alerts on excessive noise, and smart locks generating unique codes for each guest. Safety and security are paramount in our commitment to you.",
    features: ["Monitoring", "Smart locks", "Smoke & Noise"],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "In-House Cleaning Excellence",
    description:
      "Differentiating ourselves, we employ an in-house cleaning staff for maximum quality control. No outsourcing; our team focuses on even the minutest details, ensuring professional-level cleanliness after every stay. Your property deserves nothing less than a five-star review.",
    features: [
      "Cleaned after every checkout according to SOP",
      "Inspected by Managers frequently",
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          At ONE WORLD Property Holdings, we pride ourselves on our deep
          industry knowledge and expertise in property management, ensuring that
          your residential property is in good hands. We also make trust and
          safety top priorities, so you can feel confident and secure with our
          services. Choose ONE WORLD Property Holdings for a hassle-free and
          professional property management experience.
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
