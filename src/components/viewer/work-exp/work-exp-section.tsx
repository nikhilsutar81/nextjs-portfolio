import { Timeline } from "@/components/ui/timeline"
import connectDB from "@/db/connectDB"
import { WorkExperience } from "@/models/WorkExpModel";
import { WorkExperienceTypes } from "@/types/types";
import { ScrollFadeIn } from "@/components/scroll-fade-in";

connectDB();

export async function WorkExpSection (){
    

    const workExpData: WorkExperienceTypes[] = await WorkExperience.find().sort({ startDate: -1 });

    // console.log("WORK EXP DATA", workExpData);
    

    return (
        <div className="w-full">
            <ScrollFadeIn direction="up">
                <Timeline
                    data={JSON.stringify(workExpData)}
                />
            </ScrollFadeIn>
        </div>
    )
}