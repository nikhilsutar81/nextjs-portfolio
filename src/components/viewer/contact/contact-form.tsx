'use client';

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { SendHorizonal } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"


const formSchema = z.object({
    fullName: z.string().min(1, "Full Name is Required!"),
    email: z.string().email("Please enter valid email!").min(1, "Email is required!"),
    message: z.string().min(1, "Message is required!")
})

export const ContactForm = () => {

    const [isMounted, setIsMounted] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            message: ''
        }

    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/contact', values);
            // console.log("RES OF CONTACT", res);
            form.reset();
            setSuccessMessage(true);
            setTimeout(() => {
                setSuccessMessage(false);
            }, 10000)

        } catch (error) {
            console.log("ERROR SENDING CONTACT REQUEST", error);
        }
    }

    const isSubmitting = form.formState.isSubmitting

    if (!isMounted) return null;

    return (
        <>
            {
                successMessage &&
                <div className="text-green-500 px-4 md:text-center mt-8 font-medium text-xs md:-mb-8">
                    🎉 Your message has been sent successfully! I will get back to you soon.
                </div>

            }
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex flex-col gap-8 md:gap-12 transition-all duration-300 px-4 sm:px-0"
                >
                    <FormField
                        name="fullName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="space-y-4">
                                <FormLabel className="text-lg md:text-xl font-bold text-white/90 tracking-wide font-lato">Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field}
                                        disabled={isSubmitting}
                                        className="italic border-t-0 border-x-0 border-b border-zinc-800 rounded-none bg-transparent 
                                         focus-visible:ring-0 focus-visible:border-white transition-all duration-300 dark:bg-transparent px-0 
                                         text-zinc-300 placeholder:text-zinc-600 h-14 text-lg md:text-xl font-lato"
                                    />
                                </FormControl>
                                <FormMessage className="text-rose-500 font-lato" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="space-y-4">
                                <FormLabel className="text-lg md:text-xl font-bold text-white/90 tracking-wide font-lato">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="johncena@gmail.com" {...field}
                                        disabled={isSubmitting}
                                        className="italic border-t-0 border-x-0 border-b border-zinc-800 rounded-none bg-transparent 
                                         focus-visible:ring-0 focus-visible:border-white transition-all duration-300 dark:bg-transparent px-0 
                                         text-zinc-300 placeholder:text-zinc-600 h-14 text-lg md:text-xl font-lato"
                                    />
                                </FormControl>
                                <FormMessage className="text-rose-500 font-lato" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="message"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="space-y-4">
                                <FormLabel className="text-lg md:text-xl font-bold text-white/90 tracking-wide font-lato">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your message..."
                                        disabled={isSubmitting}
                                        {...field}
                                        className="italic resize-none border-t-0 border-x-0 border-b border-zinc-800 rounded-none bg-transparent 
                                         focus-visible:ring-0 focus-visible:border-white transition-all duration-300 dark:bg-transparent px-0 
                                         text-zinc-300 placeholder:text-zinc-600 min-h-32 text-lg md:text-xl font-lato leading-relaxed"
                                    />
                                </FormControl>
                                <FormMessage className="text-rose-500 font-lato" />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex items-center justify-end mt-4">
                        <Button type="submit" disabled={isSubmitting}
                            className="bg-transparent hover:bg-white text-white hover:text-black rounded-none flex items-center gap-3 border border-white/30 px-10 py-7 text-base md:text-lg font-bold tracking-widest transition-all duration-300 uppercase font-lato"
                        >
                            <SendHorizonal className="w-5 h-5" />
                            {isSubmitting ? 'Sending...' : "Let's Connect!"}
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}