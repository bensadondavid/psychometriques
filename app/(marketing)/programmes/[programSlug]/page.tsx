import { permanentRedirect } from "next/navigation";

export default async function LegacyProgramPage({
  params,
}: {
  params: Promise<{ programSlug: string }>;
}) {
  const { programSlug } = await params;
  permanentRedirect(`/formations/${programSlug}`);
}
