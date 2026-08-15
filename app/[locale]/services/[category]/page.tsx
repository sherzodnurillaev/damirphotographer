import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { notFound } from "next/navigation";

import {
  getPackages,
  getServiceByCategory,
  getGalleryByCategory,
} from "@/lib/services";

interface Props {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { category } = await params;

  const service = await getServiceByCategory(category);

  if (!service) {
    notFound();
  }

  const packages = await getPackages(category);
  const gallery = await getGalleryByCategory(category);

  return (
    <main
      className="
        mt-[70px]
        min-h-screen
        w-full
        overflow-hidden
        sm:mt-[80px]
        md:mt-[100px]
      "
    >
      <ServiceDetail
        service={service}
        packages={packages}
        gallery={gallery}
      />
    </main>
  );
}