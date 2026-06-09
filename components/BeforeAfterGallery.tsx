import Image from "next/image";

export default function BeforeAfterGallery({ images }: { images: string[] }) {
  if (!images?.length) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image
            src={src}
            alt={`Before and after result ${i + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
