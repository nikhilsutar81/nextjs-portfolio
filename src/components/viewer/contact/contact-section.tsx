import { ContactForm } from "./contact-form"
import { ScrollFadeIn } from "@/components/scroll-fade-in";

export const ContactSection = () => {

    return (
        <div id="contact" className="w-full min-h-screen flex flex-col items-center justify-center font-lato pt-24 pb-20 px-4 md:px-0">
            <div className="w-full max-w-2xl mx-auto text-left sm:text-center transition-all duration-300">
                <ScrollFadeIn direction="up">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl italic mb-6 font-breeserif dark:text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
                        The Next Big Thing Starts Here
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-lato max-w-lg mx-auto leading-relaxed opacity-80 transition-all duration-300">
                        Feel free to reach out—whether it’s for a collaboration, project, or just to chat tech.
                    </p>
                </ScrollFadeIn>
            </div>
            <ScrollFadeIn direction="up" delay={0.2} className="w-full max-w-2xl mx-auto mt-12 md:mt-20">
                <ContactForm />
            </ScrollFadeIn>
        </div>
    )
}