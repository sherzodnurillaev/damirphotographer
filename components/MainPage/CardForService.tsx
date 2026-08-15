"use client";

import { useEffect, useState } from "react";
import { getServices } from "@/lib/supabase/services";
import { Service } from "../Services/types";
import ServiceCard from "../Services/ServiceCard";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <section className="bg-[#c1a388] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            lg:grid-cols-3
            lg:gap-6
            xl:gap-8
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}