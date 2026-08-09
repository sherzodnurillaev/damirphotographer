import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { notFound } from "next/navigation";

import {
  getPackages,
  getServiceByCategory,
  getGalleryByCategory,
} from "@/lib/services";

import MasonryGallery from "@/components/portfolio/MasonryGallery";



interface Props {
  params: Promise<{
    locale: string;
    category: string;
  }>;
    service: any;
  packages: any[];
  gallery: any[];
}

export default async function ServicePage({ params }: Props) {
    const { category } = await params;

    const service = await getServiceByCategory(category);
    const gallery = await getGalleryByCategory(category);

    if (!service) {
    notFound();
    }

    const packages = await getPackages(category);

  return (
    <main className="mt-[100px]">
        <ServiceDetail
            service={service}
            packages={packages}
            gallery={gallery}
        />
    </main>
  );
}