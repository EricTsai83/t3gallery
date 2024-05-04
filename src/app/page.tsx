import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic"; // to force dynamic because we want to make sure every time a change is made in our database thsi page's content is updated on the next visit
async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48  flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
