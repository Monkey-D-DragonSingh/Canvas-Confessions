import { paintings } from "@/app/lib/paintings";
import { notFound } from "next/navigation";
import PaintingReveal from "@/components/PaintingReveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PaintingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const painting = paintings.find((p) => p.slug === slug);

  if (!painting) {
    notFound();
  }

  return <PaintingReveal painting={painting} />;
}

export async function generateStaticParams() {
  return paintings.map((painting) => ({
    slug: painting.slug,
  }));
}
