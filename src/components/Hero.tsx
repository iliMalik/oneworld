import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <Image
            className="h-40 w-auto"
            src="/images/logos/oneworld.svg"
            alt="Logo Your Company"
            width={150}
            height={150}
            quality={75}
            sizes="100vw"
          />

          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Unlock a world of worry-free property management with us—where
            stable income meets efficient care. Trust in our expertise,
            cutting-edge security, and top-notch cleanliness. Join our journey
            of seamless operations, redefining standards, and expanding
            possibilities for landlords like you.
          </p>
        </div>

        <div className="hidden md:block md:col-start-2 md:row-start-1">
          <Image
            src="/images/hero/home.jpg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="flex place-items-start mt-12 md:hidden">
        <Image
          src="/images/hero/home.jpg"
          alt="Image hero description"
          width={1025}
          height={662}
          quality={75}
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
