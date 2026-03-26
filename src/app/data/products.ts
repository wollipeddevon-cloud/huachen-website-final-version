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
    features: ["3-Meter Width", "30% Breathability"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654245/1_yuvlme.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "This flagship sunshade fabric is meticulously crafted for large-scale commercial office spaces. With its 300 cm extra-wide width, it delivers seamless integration and a visually unified finish across expansive glass facades. Featuring 30% breathability, it maintains a bright and comfortable indoor environment while effectively blocking 95% of harmful UV rays, enhancing energy efficiency and creating a perfect balance of performance and aesthetics.",
    specifications: {
      composition: "30% Polyester, 70% PVC",
      width: "140cm / 280cm / 300cm",
      opacity: "Semi-Transparent (5% Openness)"
    }
  },
  {
    id: 2,
    name: "Roller Blinds",
    slug: "roller-blinds",
    category: "Blackout Lining",
    application: "Hospitality",
    features: ["Medical-Grade Safety", "Zero-Pinhole"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654543/2_zvomme.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "The roller blind system features a modular structure, suitable for both residential and commercial shading applications. The fabric is operated via a tube-driven mechanism, ensuring smooth movement and low-noise performance. The system supports both manual and motorized control options, offering flexibility for various applications. A variety of fabric options are available (light-filtering, dim-out, blackout) to achieve different levels of light control and privacy. Its compact structure minimizes space usage and allows for easy installation and maintenance.",
    specifications: {
      composition: "100% Polyester with Acrylic Coating",
      width: "140cm / 280cm / 300cm",
      opacity: "Blackout",
      flameRetardancy: "BS5867/NFPA701/B1"
    }
  },
  {
    id: 3,
    name: "Vertical blinds",
    slug: "vertical-blinds",
    category: "Vertical Blinds",
    application: "Residential",
    features: ["100% blackout", "Soft feel"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654548/3_uzcge5.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Vertical blinds combine modern functionality with a clean aesthetic design. The vertical slat system offers versatile light control and privacy options suitable for both residential and commercial applications. The 3-stage dimming capability provides flexible light management, while the durable fabric construction ensures long-lasting performance and easy maintenance.",
    specifications: {
      composition: "80% Polyester, 20% Linen",
      width: "140cm / 280cm / 300cm",
      opacity: "Dim-out/Blackout",
      flameRetardancy: "BS5867/NFPA701/B1"
    }
  },
  {
    id: 4,
    name: "F.R Blackout Fabric",
    slug: "fr-blackout-fabric",
    category: "Blackout Lining",
    application: "Office",
    features: ["Fire Retardant Fabric", "Multi-Quality"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654551/4_grqv2z.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "The F.R Blackout Fabric is engineered for high-performance office environments with superior flame retardant protection. It combines advanced blackout efficiency with a soft hand feel and durability for heavy use.",
    specifications: {
      composition: "100% Polyester",
      width: "140cm / 280cm / 300cm",
      opacity: "Dim out/Blackout",
      flameRetardancy: "BS5867/NFPA701/B1"
    }
  },
  {
    id: 5,
    name: "Ready-Made Curtain",
    slug: "ready-made-curtain",
    category: "Curtains",
    application: "Hospitality",
    features: ["OEM/ODM", "Customize"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654555/5_xwax61.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "Ready-Made Curtain is a versatile hospitality product designed for quick installation and customizable aesthetics. It supports both standard and tailored production, enabling flexible solutions for various interior decor requirements.",
    specifications: {
      composition: "100% Recycled Polyester Felt",
      width: "140cm / 280cm / 300cm",
      opacity: "Customize",
      flameRetardancy: "BS5867/NFPA701/B1"
    }
  },
  {
    id: 6,
    name: "Wholesale coated blackout fabric",
    slug: "ecoweave",
    category: "Sunshade",
    application: "Residential",
    features: ["In stock", "Factory"],
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1773654559/6_qnpkpz.png",
    textureImage: "https://images.unsplash.com/photo-1700547949736-024ad8cb56cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "EcoWeave is our testament to sustainable luxury. Crafted entirely from recycled PET bottles, this fabric features a beautiful, organic texture that mimics natural linen. It's the perfect choice for environmentally conscious homeowners who refuse to compromise on style.",
    specifications: {
      composition: "100% Recycled Polyester (rPET)",
      width: "140cm / 280cm / 300cm",
      opacity: "Customize"
    }
  }
];