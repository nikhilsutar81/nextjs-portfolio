import connectDB from "@/db/connectDB";
import { uploadToCloudinary } from "@/lib/cloudinary";
import getDataFromToken from "@/lib/get-data-from-token";
import AboutModel from "@/models/AboutModel";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const decodedToken = await getDataFromToken(req);
    if (!decodedToken || typeof decodedToken === "string") {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const user = await User.findOne({ _id: decodedToken.id }).select("-password");
    if (!user) {
      return new NextResponse("Unauthorized User", { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('photo') as File;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!file || !(file instanceof File) || !allowedTypes.includes(file.type)) {
      return new NextResponse('Invalid or missing file', { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadToCloudinary(buffer, file.type, { folder: 'about' });

    let about = await AboutModel.findOne();
    if (about) {
      about.photo = { id: result.public_id, url: result.secure_url };
      await about.save();
    } else {
      about = await AboutModel.create({ photo: { id: result.public_id, url: result.secure_url } });
    }

    return NextResponse.json(about);
  } catch (error) {
    console.error('ABOUT API ERROR', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
