export type ContentBlock =
  | { type: 'text'; html: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'imagePair'; images: { src: string; caption?: string }[] }
  | { type: 'video'; src: string; caption?: string; poster?: string }
  | { type: 'quote'; text: string; author?: string; role?: string };

export type NewsItem = {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
  /** @deprecated — use contentBlocks instead */
  content?: string;
  contentBlocks: ContentBlock[];
};

export const newsItems: NewsItem[] = [
  {
    title: "Strategic Alliance with Dow Chemical",
    date: "February 10, 2026",
    category: "Partnership",
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772385501/LATEST_news_1_em1iwk.jpg",
    excerpt: "Establishing a joint R&D laboratory to pioneer next-generation polymer coatings for superior durability and safety. This partnership marks a significant milestone in our commitment to technological leadership.",
    slug: "strategic-alliance-dow-chemical",
    contentBlocks: [
      {
        type: 'text',
        html: `<p>Huachen Materials Science is proud to announce a strategic alliance with Dow Chemical, a global leader in materials science. This partnership establishes a joint Research & Development laboratory focused on pioneering next-generation polymer coatings.</p>`
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387985/Market_Entry_Compliance_2_o3fs3b.jpg',
        caption: 'The new joint R&D laboratory will combine Dow\'s polymer expertise with Huachen\'s textile engineering capabilities.'
      },
      {
        type: 'text',
        html: `<h3>A New Era of Durability</h3><p>The collaboration will leverage Dow's world-class polymer science and Huachen's textile engineering expertise. Together, we aim to develop coatings that offer superior durability, enhanced UV resistance, and improved environmental safety.</p>`
      },
      {
        type: 'imagePair',
        images: [
          {
            src: 'https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386287/why_we_lead_2_wjfk1h.jpg',
            caption: 'Cross-functional teams conducting polymer testing'
          },
          {
            src: 'https://images.unsplash.com/photo-1595972499967-4779c68725e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
            caption: 'Advanced fabric weave under microscopic analysis'
          }
        ]
      },
      {
        type: 'text',
        html: `<h3>Key Objectives</h3><ul><li>Development of formaldehyde-free formulations.</li><li>Enhanced hydrostatic pressure resistance for extreme weather conditions.</li><li>Creation of self-cleaning and anti-microbial surface technologies.</li></ul>`
      },
      {
        type: 'quote',
        text: 'This alliance represents a fusion of best-in-class chemistry and textile manufacturing. We are setting new benchmarks for the industry.',
        author: 'Susie Sun',
        role: 'CEO, Huachen Materials Science'
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/ubC2xEYMqUU',
        caption: 'Watch: Highlights from the signing ceremony and lab inauguration',
        poster: 'https://res.cloudinary.com/dyf7vdifi/image/upload/v1772385501/LATEST_news_1_em1iwk.jpg'
      }
    ]
  },
  {
    title: "Heimtextil 2026: The Eco-Shield Launch",
    date: "January 15, 2026",
    category: "Product Launch",
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772385523/latest_news_2_gfikpz.jpg",
    excerpt: "Unveiling our sustainable fabric line featuring 100% recycled materials and zero-water dyeing technology. The reception from international buyers has been overwhelmingly positive.",
    slug: "heimtextil-2026-eco-shield",
    contentBlocks: [
      {
        type: 'text',
        html: `<p>At Heimtextil 2026 in Frankfurt, Huachen unveiled "Eco-Shield," our most advanced sustainable fabric line to date. This launch underscores our commitment to reducing the environmental footprint of textile manufacturing.</p>`
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387985/Market_Entry_Compliance_2_o3fs3b.jpg',
        caption: 'The Huachen exhibition booth at Heimtextil 2026, Frankfurt.'
      },
      {
        type: 'text',
        html: `<h3>Sustainability Meets Performance</h3><p>Eco-Shield fabrics are crafted from 100% recycled post-consumer plastics and utilize a revolutionary zero-water dyeing technology. This process reduces water consumption by 95% compared to traditional methods.</p>`
      },
      {
        type: 'imagePair',
        images: [
          {
            src: 'https://images.unsplash.com/photo-1621882844178-fa8129633ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
            caption: 'Recycled PET pellets — the raw material behind Eco-Shield'
          },
          {
            src: 'https://images.unsplash.com/photo-1721578006568-17901600cff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
            caption: 'State-of-the-art textile production line'
          }
        ]
      },
      {
        type: 'text',
        html: `<p>Despite their eco-friendly credentials, these fabrics maintain the high-performance standards Huachen is known for: 100% blackout capability, flame retardancy, and superior thermal insulation.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/FBj0sEpoeZA',
        caption: 'Watch: The Eco-Shield product line reveal at Heimtextil 2026'
      }
    ]
  },
  {
    title: "Innovation, Now at Your Fingertips",
    date: "March 01, 2026",
    category: "Community",
    image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772389118/latest_news_3_fk2nr0.png",
    excerpt: "Join our digital community to stay ahead of the curve. We will be sharing our latest continuous innovations.",
    slug: "innovation-fingertips",
    contentBlocks: [
      {
        type: 'text',
        html: `<h3>A New Era of Connection: Huachen's 2026 Global Digital Launch</h3><h4>From Silent Innovation to Vibrant Conversation</h4><p>For decades, Huachen's "Corporate DNA" has been defined by quiet precision and a relentless focus on R&D. We have always believed that the best technology speaks for itself. However, as we enter 2026, we realize that in a connected world, innovation is not just about what we build—it's about the community we build it with.</p><p>Today marks a historic pivot for Huachen. We are moving beyond the laboratory and into the global digital conversation, launching a comprehensive social media ecosystem designed to bring our partners, clients, and enthusiasts closer to our mission than ever before.</p>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/kcAP83fQvfU',
        caption: 'Watch: Huachen\'s 2026 Global Digital Launch — our journey from silent innovation to vibrant conversation'
      },
      {
        type: 'text',
        html: `<h3>Our 2026 Social Media Matrix</h3><p>We aren't just "joining" social media; we are tailoring our presence to meet you where you are. Each platform offers a unique window into the world of Huachen.</p>`
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1690192609138-33b5c4f04b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        caption: 'The Huachen digital team crafting platform-specific content strategies for 2026.'
      },
      {
        type: 'text',
        html: `<h4>🚀 TikTok | Innovation in Motion</h4><p>Our primary focus for 2026. This is where we break down complex technology into bite-sized, high-energy content. Expect:</p><ul><li><strong>Behind-the-Scenes:</strong> See the "controlled chaos" of our innovation labs.</li><li><strong>Tech Hacks:</strong> Quick tips on how to maximize Huachen product solutions.</li><li><strong>Challenges:</strong> Engaging with the next generation of creators and engineers.</li></ul>`
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/280M3nyqxUk',
        caption: 'Watch: Huachen on TikTok — Innovation in Motion'
      },
      {
        type: 'text',
        html: `<h4>👥 Facebook | The Community Core</h4><p>Facebook remains our central hub for building deep, lasting relationships. It is the home for:</p><ul><li><strong>Interactive Groups:</strong> Dedicated spaces for users to share feedback and solutions.</li><li><strong>Live Q&As:</strong> Monthly sessions with our product leads.</li><li><strong>Comprehensive Support:</strong> A direct line for community-driven assistance.</li></ul>`
      },
      {
        type: 'imagePair',
        images: [
          {
            src: 'https://images.unsplash.com/photo-1698399480537-5a6983c53d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
            caption: 'Content creation for TikTok — high-energy, bite-sized innovation stories'
          },
          {
            src: 'https://images.unsplash.com/photo-1762340277058-3ea015388744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
            caption: 'LinkedIn thought leadership — connecting with the industry\'s brightest minds'
          }
        ]
      },
      {
        type: 'text',
        html: `<h4>💼 LinkedIn | Strategic Thought Leadership</h4><p>As we scale globally, LinkedIn is where we connect with the industry's brightest minds. We will use this platform for:</p><ul><li><strong>Industry Whitepapers:</strong> Deep dives into the future of tech and corporate strategy.</li><li><strong>Corporate Milestones:</strong> Updates on our global partnerships and sustainability goals.</li><li><strong>Talent Spotlights:</strong> Highlighting the brilliant professionals who make Huachen possible.</li></ul>`
      },
      {
        type: 'text',
        html: `<h4>📸 Instagram | The Aesthetic of Tech</h4><p>Technology should be as beautiful as it is functional. On Instagram, we focus on the "Art of Innovation":</p><ul><li><strong>Product Design:</strong> High-fidelity galleries showcasing our latest aesthetics.</li><li><strong>Lifestyle Integration:</strong> How Huachen tech fits seamlessly into your daily life.</li><li><strong>Creator Spotlights:</strong> Featuring how our community uses Huachen tools to create.</li></ul>`
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1563103005-587befa55b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        caption: 'Instagram — where the art of innovation meets product aesthetics.'
      },
      {
        type: 'quote',
        text: '2026 isn\'t just a calendar year for us; it\'s the year Huachen finds its voice. We are opening our doors—and our screens—to the world.',
        author: 'Huachen Communications Department'
      },
      {
        type: 'text',
        html: `<h3>Stay Ahead of the Curve</h3><p>By following our new official channels, you aren't just watching our progress; you are part of it. Members of our digital community will gain exclusive early access to:</p><ul><li><strong>Beta Testing Opportunities:</strong> Help us refine products before they hit the market.</li><li><strong>Direct R&D Access:</strong> Your feedback will go directly to our engineering teams.</li><li><strong>Event Invitations:</strong> Exclusive access to our 2026 "Technology Hub" summits.</li></ul>`
      }
    ]
  }
];