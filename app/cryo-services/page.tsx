import type { Metadata } from "next";
import ServicePageView from "@/components/ServicePageView";
import { services } from "@/lib/services";

const data = services["cryo-services"];

export const metadata: Metadata = {
  title: "Cryo Services — Sculpt & Tighten | KRIDO Wellness",
  description:
    "Non-invasive cryo body sculpting and skin tightening in St. Petersburg, FL. 30-minute sessions, no downtime. Book your treatment at KRIDO Wellness.",
};

export default function CryoServicesPage() {
  return <ServicePageView data={data} />;
}
