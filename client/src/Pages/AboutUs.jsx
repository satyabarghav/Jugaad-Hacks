/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tcoXc4X8E4X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Logo from "@/assets/safeLinkLogo.jpg";
import NavbarDemo from "@/components/user/NavbarDemo";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavbarDemo />
      <main className="flex-1 bg-custom-gradient">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  About Us
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Safe Link
                </h1>
                <p className="mx-auto max-w-[700px] text-justify text-gray-500 md:text-xl dark:text-gray-400">
                  At Safe Link, our mission is to create a safer digital world
                  by empowering individuals and businesses to identify and
                  combat phishing attacks. We believe that everyone deserves to
                  navigate the internet without fear of falling victim to
                  malicious schemes. Our advanced detection technology ensures
                  that you can trust the communications you receive and protect
                  your personal and professional information. Safe Link is a
                  cutting-edge web application designed to detect phishing
                  emails and messages in real time. Our vision is to create a
                  secure digital world where individuals and organisations can
                  communicate confidently without the fear of phishing attacks.
                  We strive to be at the forefront of cybersecurity innovation,
                  delivering solutions that make the internet a safer place for
                  everyone. We hereby combine our expertise to deliver a
                  powerful solution that keeps pace with the ever-changing
                  landscape of phishing tactics.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={Logo}
                    alt="Acme Inc Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full pt-4 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our History
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  A Legacy of Innovation
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Acme Inc was founded in 1985 with the mission of revolutionizing the way businesses operate. Over the
                  years, we have consistently pushed the boundaries of technology, delivering cutting-edge solutions
                  that have transformed industries.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Values</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Guiding Principles
                </h2>
                <ul className="space-y-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <li>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Innovation: Constantly pushing the boundaries of what's possible.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Integrity: Upholding the highest ethical standards.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Customer Focus: Putting the needs of our clients first.</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Teamwork: Collaborating to achieve extraordinary results.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Safe Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our talented team is dedicated to delivering exceptional
                  solutions to you
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <img src="/placeholder.svg" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Rahul</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <img src="/placeholder.svg" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Satya</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <img src="/placeholder.svg" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Praneetha</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <img src="/placeholder.svg" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Preethi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
