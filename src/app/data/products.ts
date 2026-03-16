export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  application: string;
  features: string[];
  image: string;
  textureImage: string;
  description: string;
  specifications: {
    composition: string;
    width: string;
    weight: string;
    opacity: string;
    flameRetardancy: string;
  };
};

export const products: Product[] = [
  {
    id: 1,
    name: "Dim out/Woven Blackout",
    slug: "dim-out-woven-blackout",
    category: "Sunshade",
    application: "Office",
    features: ["6-Meter Width", "30% Breathability"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654245/1_yuvlme.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "The Helios 3000 is our flagship sunshade fabric, designed specifically for large-scale commercial office applications. With an unprecedented 6-meter width, it allows for seamless installation on expansive glass facades. Its 30% breathability factor ensures optimal airflow while blocking 95% of harmful UV rays, significantly reducing cooling costs.",
    specifications: {
      composition: "30% Polyester, 70% PVC",
      width: "300cm / 600cm",
      weight: "520 g/m²",
      opacity: "Semi-Transparent (5% Openness)",
      flameRetardancy: "NFPA 701, B1"
    }
  },
  {
    id: 2,
    name: "Luna Blackout",
    slug: "luna-blackout",
    category: "Blackout Lining",
    application: "Hospitality",
    features: ["Medical-Grade Safety", "Zero-Pinhole"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654543/2_zvomme.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Luna Blackout sets the gold standard for hospitality shading. Engineered with our proprietary 4-pass coating technology, it guarantees 100% light blockage with zero pinholes. The fabric also features an anti-bacterial coating, making it ideal for high-traffic hotel rooms and healthcare environments.",
    specifications: {
      composition: "100% Polyester with Acrylic Coating",
      width: "280cm",
      weight: "380 g/m²",
      opacity: "Blackout",
      flameRetardancy: "NFPA 701, BS 5867"
    }
  },
  {
    id: 3,
    name: "Imperial Roman",
    slug: "imperial-roman",
    category: "Roman Blinds",
    application: "Residential",
    features: ["3-Stage Dimming", "Layered Aesthetics"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654548/3_uzcge5.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Combining traditional elegance with modern functionality, the Imperial Roman collection offers a unique 3-stage dimming capability. The rich, textured weave adds depth and warmth to any residential interior, while the integrated lining provides superior thermal insulation.",
    specifications: {
      composition: "80% Polyester, 20% Linen",
      width: "140cm",
      weight: "450 g/m²",
      opacity: "Dim-out",
      flameRetardancy: "N/A"
    }
  },
  {
    id: 4,
    name: "TechRoller V2",
    slug: "techroller-v2",
    category: "Roller Blinds",
    application: "Office",
    features: ["Smart Sensor Integration", "Anti-Glare"],
    image: "https://images.unsplash.com/photo-1758269445774-61a540a290a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "The TechRoller V2 is designed for the modern smart office. It features metallicized backing for enhanced heat reflection and is fully compatible with building automation systems. The anti-glare weave improves screen visibility without sacrificing natural daylight.",
    specifications: {
      composition: "100% Trevira CS",
      width: "300cm",
      weight: "240 g/m²",
      opacity: "Transparent (3% Openness)",
      flameRetardancy: "M1, B1"
    }
  },
  {
    id: 5,
    name: "Acoustic Silence",
    slug: "acoustic-silence",
    category: "Acoustic",
    application: "Hospitality",
    features: ["NRC 0.85", "Fire Retardant"],
    image: "https://images.unsplash.com/photo-1606941060194-a3cd8afef7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Acoustic Silence is a revolutionary fabric that serves a dual purpose: shading and sound absorption. With a Noise Reduction Coefficient (NRC) of 0.85, it effectively dampens ambient noise in busy hospitality settings like lobbies and restaurants.",
    specifications: {
      composition: "100% Recycled Polyester Felt",
      width: "160cm",
      weight: "800 g/m²",
      opacity: "Opaque",
      flameRetardancy: "ASTM E84 Class A"
    }
  },
  {
    id: 6,
    name: "EcoWeave",
    slug: "ecoweave",
    category: "Sunshade",
    application: "Residential",
    features: ["100% Recycled", "Natural Texture"],
    image: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "EcoWeave is our testament to sustainable luxury. Crafted entirely from recycled PET bottles, this fabric features a beautiful, organic texture that mimics natural linen. It's the perfect choice for environmentally conscious homeowners who refuse to compromise on style.",
    specifications: {
      composition: "100% Recycled Polyester (rPET)",
      width: "300cm",
      weight: "320 g/m²",
      opacity: "Semi-Transparent",
      flameRetardancy: "NFPA 701"
    }
  }
];