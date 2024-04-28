import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b600cbcc-b447-42f2-9362-7340ffb66073-21qsq.jpg",
  "https://utfs.io/f/e3cd3648-477c-49b2-af4e-3403b5302e8c-21qsp.jpg",
  "https://utfs.io/f/f84c1e5e-9495-43be-93ae-568f86867f5e-21qso.jpg",
  "https://utfs.io/f/d9a277df-293c-4363-a05b-e98521c9db9b-21qsn.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
