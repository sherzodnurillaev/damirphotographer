'use client';

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

    <section className="py-24 bg-[#c1a388]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

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