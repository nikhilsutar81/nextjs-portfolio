import getDataFromToken from "@/lib/get-data-from-token";
import User from "@/models/UserModel";
import Skill from '@/models/SkillModel';
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const decodedToken = await getDataFromToken(req);

        if (!decodedToken || typeof decodedToken === 'string') {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const user = await User.findOne({ _id: decodedToken.id }).select("-password");

        if (!user) {
            return new NextResponse("Unauthorized User", { status: 401 });
        }

        const data = await Skill.find().select("_id skill");

        if (!data) {
            return new NextResponse('Skills not found!', { status: 400 })
        }

        return NextResponse.json(data);
    } catch (error) {
        console.log("ERROR GETTING SKILLS", error);
        return NextResponse.json(error, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const decodedToken = await getDataFromToken(req);

        if (!decodedToken || typeof decodedToken === 'string') {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const user = await User.findOne({ _id: decodedToken.id }).select("-password");

        if (!user) {
            return new NextResponse("Unauthorized User", { status: 401 });
        }

        const formData = await req.formData();

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

        // Get optional iconName (selected from admin) and logo file
        const iconName = formData.get('iconName') as string | null;
        const logoFile = formData.get("logo") as File | null;

        let logoUpload = null;
        if (logoFile && logoFile instanceof File) {
            if (!allowedTypes.includes(logoFile.type)) {
                return new NextResponse("Invalid logo image type", { status: 400 });
            }

            // Convert logo to buffer and upload to Cloudinary
            const logoBuffer = Buffer.from(await logoFile.arrayBuffer());
            logoUpload = await uploadToCloudinary(logoBuffer, logoFile.type, {
                folder: "projects/skills"
            });
        }

        // Create skill object from formData
        interface SkillData {
            userId: string;
            skill: FormDataEntryValue | null;
            level: FormDataEntryValue | null;
            type: FormDataEntryValue | null;
            experience?: FormDataEntryValue | null;
            projects?: FormDataEntryValue | null;
            description?: FormDataEntryValue | null;
            logo?: { public_id: string; url: string };
            iconName?: string | null;
        }
        const skillData: SkillData = {
            userId: decodedToken.id,
            skill: formData.get("skill"),
            level: formData.get("level"),
            type: formData.get("type"),
            experience: formData.get("experience"),
            projects: formData.get("projects"),
            description: formData.get("description"),
        };

        if (logoUpload) {
            skillData.logo = {
                public_id: logoUpload.public_id,
                url: logoUpload.secure_url
            };
        }

        if (iconName) {
            skillData.iconName = iconName;
        }

        const skill = await Skill.create(skillData);

        if (!skill) {
            return new NextResponse("Unable to create Skill", { status: 400 });
        }

        return NextResponse.json({ message: "Skill Added!", skillData: skill }, { status: 201 });

    } catch (error) {
        console.log("[POST SKILL]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
