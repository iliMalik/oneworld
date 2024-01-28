import Image from "next/image";

const services = [
  {
    title: "Stable Income, Worry-Free Management",
    description:
      "Secure a stable and reliable income without the stress of tenant management. Our guaranteed rental income service allows you to relax as we handle everything. No more concerns about late rent payments or tenant job losses. Experience the confidence of receiving a stress-free rent cheque every month.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "No Costly Turnovers",
    description:
      "Eliminate costly turnover fees with our dedicated team at ONE WORLD focused on tenant satisfaction and property maintenance. Trust us to manage your property efficiently, ensuring you maximize profits without unnecessary expenses.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Top-Notch Property Maintenance",
    description:
      "Embrace our less wear and tear approach to residential property management. Our experienced cleaning staff ensures your property stays in A+ condition with daily attention. Bid farewell to the shock of discovering damages after a lease ends, and welcome the assurance of a well-maintained property.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What we do?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          One World Property Holdings takes the stress out of owning rental
          properties. Our comprehensive management services provide peace of
          mind and consistent income for property owners.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
