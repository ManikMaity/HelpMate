import KeyFeatureCard from "@/components/Hero/KeyFeatureCard";
import Testimonials from "@/components/Hero/Testimonials";
import { Button } from "@/components/ui/button";
import { howItWorks, keyFeatures } from "@/config/dataConfig";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";




function Home() {
  return (
    <main className="hero-section">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold pb-6 gradientText ">
            Connect. Learn. Grow.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed">
            HelpMate is an open-source, community-driven platform where users
            can provide and receive free career and study help.
          </p>
          <div className="mt-6">
            <Link href={"/dashboard"}>
              <Button size={"lg"}>
                <p>Get Started</p>
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-[80%] md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md aspect-square">
            <Image
              src="/hero-image.png"
              width={800}
              height={500}
              alt="HelpMate hero image"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h2 className="subheading my-6 md:my-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <KeyFeatureCard key={index} data={feature} />
          ))}
        </div>
      </div>

      <div className="mb-24">
          <h2 className="subheading my-6 md:my-8 text-center">What Our Users Say?</h2>
          <Testimonials />
      </div>

      <div className="mb-24">
          <h2 className="subheading my-8 md:my-10 text-center">How It Works?</h2>
          <div className="grid max-w-[96%] md:max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div  key={index} className="relative">
                <span className="bg-blue-500 opacity-70 text-xl font-bold text-white rounded-full size-9 md:size-16 absolute -top-5 -right-5 flex items-center justify-center">{index + 1}</span>
                <KeyFeatureCard data={step} />
              </div>
            ))}
          </div>
      </div>

      <div className="mb-24 bg-blue-500 p-8 rounded-md text-center">
          <h2 className="cta-subheading my-4 text-center">Ready to Grow Together?</h2>
          <p className="text-base text-white">Join thousands of students and professionals on HelpMate to help each other.</p>
          <Link href="/dashboard">
            <Button className="mt-6" size={"lg"}>Get Started <ArrowRight /></Button>
          </Link>
      </div>
    </main>
  );
}

export default Home;
