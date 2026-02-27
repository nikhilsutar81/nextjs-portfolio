import { OpenModalButton } from "@/components/open-modal-button";
import connectDB from "@/db/connectDB";
import AboutModel from "@/models/AboutModel";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

connectDB();

export default async function AboutAdmin() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token');
  if (!token) return redirect('/login');

  const about = await AboutModel.findOne();

  return (
    <div className="w-full h-full flex flex-col gap-4 bg-gray p-4 bg-white border-b dark:bg-zinc-900/70 text-black dark:text-white">
      <div className="flex w-full items-center justify-end">
        <OpenModalButton modelType="editAbout" label="Change Photo" />
      </div>
      <div className="flex justify-center">
        {about?.photo?.url ? (
          <Image
            src={about.photo.url}
            width={200}
            height={200}
            alt="About photo"
            className="rounded-full"
          />
        ) : (
          <p>No about photo set yet.</p>
        )}
      </div>
    </div>
  );
}
