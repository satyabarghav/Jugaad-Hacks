import React from 'react'
import { Card,CardContent } from '@/components/ui/card'
import NavbarDemo from '@/components/user/NavbarDemo'
export default function Services() {
  return (
    <div>
        <NavbarDemo/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-custom-gradient h-screen dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-1">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Services</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Our Services
                </h2>
                <Card>
                  <CardContent>
                    <h3 className="text-xl font-bold">Email Phishing Detector</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our advanced email phishing detection service helps protect your organization from malicious
                      attacks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
