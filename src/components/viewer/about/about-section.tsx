
import AboutModel from "@/models/AboutModel";
import connectDB from "@/db/connectDB";
import Image from "next/image";

export const AboutSection = async () => {
    await connectDB();
    const about = await AboutModel.findOne();

    return (
        <div className="w-full min-h-screen pt-32 sm:pt-24 pb-20 sm:pb-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-12 text-white">
            <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="w-full sm:mt-6 text-left text-2xl sm:text-3xl md:text-4xl font-bold font-breeserif italic pr-12 sm:pr-0 sm:pl-8 md:pl-16 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent transition-all duration-300">
                    A Bit About Me
                </h2>
                <div className="mt-6 text-left text-sm md:text-base sm:w-full lg:w-11/12 font-lato sm:pl-8 md:pl-16">
                    <p>
                        I&apos;m Nikhil Sutar, a Full-Stack Web Developer with a focus on building scalable, high-performance SaaS and complex software applications. I thrive on delivering clean, efficient code, prioritizing customer satisfaction, and am capable of working both independently and as part of a collaborative team.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start sm:justify-start items-start sm:items-center gap-6 mt-4">
                        <div className="flex flex-col items-center justify-center px-4 py-3">
                            <div className="text-2xl sm:text-3xl font-bold text-white/90">
                                2+
                            </div>
                            <div className="text-xs opacity-85">
                                Years of Experience
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center px-4 py-3">
                            <div className="text-2xl sm:text-3xl font-bold text-white/90">
                                10+
                            </div>
                            <div className="text-xs opacity-85">
                                Projects Completed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {about?.photo?.url && (
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src={about.photo.url}
                        alt="About photo"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover max-w-full h-auto"
                    />
                </div>
            )}
        </div>
    )
}