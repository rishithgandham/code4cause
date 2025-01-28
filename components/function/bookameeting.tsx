'use client';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { useForm, ValidationError } from '@formspree/react';

export default function BookAMeeting() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState<Date>()

  const [state, formSpreeHandleSubmit] = useForm("mpwqpnjo");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formSpreeHandleSubmit({
      name,
      email,
      date: date?.toISOString()
    });
    setName("");
    setEmail("");
    setDate(undefined);
    alert("Thank you for booking a meeting! We will get back to you shortly.")
  }
  
  return (
    <section id="bam" className="w-full  flex justify-center py-20 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 ">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interested? Book a Meeting</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take the next step? Schedule a meeting with our team to discuss how we can help you achieve your
              goals.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className=" w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Personalized consultation
              </li>
              <li className="flex items-center">
                <svg
                  className=" w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Expert advice tailored to your needs
              </li>
              <li className="flex items-center">
                <svg
                  className=" w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                No obligation, free consultation
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="space-y-2 my-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2 my-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 my-4">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} fromDate={new Date()} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <Button disabled={state.submitting} type="submit" className=" my-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full">
              Book Meeting
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

