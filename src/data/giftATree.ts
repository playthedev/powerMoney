import { Building2, Cake, Flower2, HeartHandshake, PartyPopper } from "lucide-react";

export type TreePackage = {
  trees: number;
  price: number;
  popular?: boolean;
};

export const treePackages: TreePackage[] = [
  { trees: 10, price: 5000 },
  { trees: 25, price: 12500, popular: true },
  { trees: 50, price: 25000 },
  { trees: 100, price: 50000 },
];

export const perTreeCost = 500;

export const maintenanceIncludes = [
  "Site cleaning & selection",
  "Soil preparation & pit digging",
  "Regular watering",
  "Mulching & manuring",
  "Tools & equipment",
  "Site protection & fencing",
  "On-ground manpower",
  "3 years of maintenance & unforeseen expenses",
];

export const occasions = [
  { label: "Birthday", description: "Mark another year with a living gift", icon: Cake },
  { label: "Anniversary", description: "Celebrate togetherness that grows", icon: HeartHandshake },
  { label: "Festival", description: "Give back during the season of giving", icon: PartyPopper },
  { label: "In Memory Of", description: "Honour a loved one with a lasting tribute", icon: Flower2 },
  { label: "Corporate CSR", description: "Offset your organisation's footprint", icon: Building2 },
];

// Approximate, commonly-cited annual benefits of one mature tree — illustrative.
export const perTreeAnnualImpact = {
  carbonKg: 22,
  pollutantsG: 1700,
  waterM3: 4,
  oxygenKg: 118,
};

export const steps = [
  {
    title: "Choose your occasion & package",
    description: "Pick how many trees you'd like to gift, from 10 to 100 or more.",
  },
  {
    title: "Share a dedication",
    description: "Tell us who it's for and any message you'd like included.",
  },
  {
    title: "We plant & maintain",
    description: "Our afforestation partners plant, protect and maintain each tree for 3 years.",
  },
  {
    title: "You get a certificate",
    description: "Receive a dedication certificate to share with your loved ones.",
  },
];
