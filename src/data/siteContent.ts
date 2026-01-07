// ============================================
// SITE CONTENT CONFIGURATION
// ============================================
// Edit this file to update ALL site content.
// No need to touch any JSX files.
// ============================================

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  isLandscape?: boolean;
}

export interface GallerySection {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'instagram' | 'email' | 'twitter' | 'linkedin' | 'behance';
}

// ============================================
// SITE METADATA
// ============================================
export const siteMetadata = {
  name: 'Sadik Visuals',
  tagline: 'Capturing Authentic Moments',
  description: 'A photography studio dedicated to telling visual stories through candid, environmental, and lifestyle photography.',
  copyright: '© 2026 Sadik Visuals. All rights reserved.',
};

// ============================================
// NAVIGATION
// ============================================
export const navigation: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
  headline: 'Visual Stories',
  subheadline: "Photography that captures the essence of life's fleeting moments.",
  ctaText: 'View Selected Work',
  ctaLink: '/work',
  // Add hero images to /public/images/hero/
  images: [
    { src: '/images/hero/hero-1.jpg', alt: 'Featured photography' },
    { src: '/images/hero/hero-2.jpg', alt: 'Featured photography' },
    { src: '/images/hero/hero-3.jpg', alt: 'Featured photography' },
  ],
};

// ============================================
// GALLERY SECTIONS
// ============================================
// Add images to /public/images/gallery/{category}/
export const gallerySections: GallerySection[] = [
  {
    id: 'people',
    title: 'People',
    description: 'Portraits and candid moments that reveal character and emotion.',
    images: [
      { src: '/images/gallery/people/people-1.jpg', alt: 'Portrait photography', title: 'Quiet Reflection' },
      { src: '/images/gallery/people/people-2.jpg', alt: 'Candid moment', title: 'Morning Light' },
      { src: '/images/gallery/people/people-3.jpg', alt: 'Environmental portrait', title: 'Urban Story' },
      { src: '/images/gallery/people/people-4.jpg', alt: 'Documentary photography', title: 'Connection' },
      { src: '/images/gallery/people/people-5.jpg', alt: 'Lifestyle photography', title: 'Golden Hour' },
      { src: '/images/gallery/people/people-6.jpg', alt: 'Portrait photography', title: 'Contemplation' },
    ],
  },
  {
    id: 'places',
    title: 'Places',
    description: 'Landscapes and environments that tell their own stories.',
    aspectRatio: 'landscape',
    images: [
      { src: '/images/gallery/places/place-1.jpg', alt: 'Landscape photography', title: 'Horizon' },
      { src: '/images/gallery/places/place-2.jpg', alt: 'Architecture photography', title: 'Structure' },
      { src: '/images/gallery/places/place-3.jpg', alt: 'Environmental photography', title: 'Stillness' },
      { src: '/images/gallery/places/place-4.jpg', alt: 'Urban photography', title: 'City Rhythm' },
      { src: '/images/gallery/places/place-5.jpg', alt: 'Nature photography', title: 'Wild Spaces' },
      { src: '/images/gallery/places/place-6.jpg', alt: 'Interior photography', title: 'Interior Light' },
    ],
  },
  {
    id: 'presence',
    title: 'Presence',
    description: 'Moments that matter.',
    images: [
      { src: '/images/gallery/moments/moments-1.jpg', alt: 'Documentary photography', title: 'Celebration' },
      { src: '/images/gallery/moments/moments-2.jpg', alt: 'Candid photography', title: 'Joy' },
      { src: '/images/gallery/moments/moments-3.jpg', alt: 'Lifestyle photography', title: 'Together' },
      { src: '/images/gallery/moments/moments-4.jpg', alt: 'Event photography', title: 'First Dance' },
      { src: '/images/gallery/moments/moments-5.jpg', alt: 'Documentary photography', title: 'Laughter' },
      { src: '/images/gallery/moments/moments-6.jpg', alt: 'Candid photography', title: 'Embrace' },
    ],
  },
];

// ============================================
// ABOUT SECTION
// ============================================
export const aboutContent = {
  title: 'About',
  subtitle: 'The Story Behind the Lens',
  paragraphs: [
    "Photography is more than capturing images. It's about preserving emotions, connections, and the authentic beauty of everyday life.",
    'With an eye for natural light and genuine moments, I create visual narratives that feel both timeless and deeply personal. My approach is unobtrusive and patient, allowing real stories to unfold naturally.',
    "Whether documenting quiet intimacy or vibrant energy, my goal is always the same: to create photographs that you'll treasure for years to come.",
  ],
  image: '/images/about/photographer.jpg',
  imageAlt: 'Photographer at work',
  stats: [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Stories Captured', value: '200+' },
    { label: 'Happy Clients', value: '150+' },
  ],
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactContent = {
  title: 'Get in Touch',
  subtitle: "Let's create something beautiful together",
  description: "I'd love to hear about your project. Whether you have a clear vision or just an idea, reach out and let's start a conversation.",
  email: 'syam46484@gmail.com',
  phone: '+1 (660) 232-4577',
  location: 'St. Louis, MO, USA',
  availability: 'Currently accepting bookings for 2026',
  socialLinks: [
    { platform: 'Email', url: 'mailto:syam46484@gmail.com', icon: 'email' as const },
  ],
};

// ============================================
// FOOTER
// ============================================
export const footerContent = {
  text: 'Crafted with care in St. Louis',
  links: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
};

// ============================================
// HOME PAGE FEATURED WORK
// ============================================
// Select which gallery section to feature on home page
// For mixed layout: set isLandscape: true for wide images (they span 2 columns)
export const homePageFeatured = {
  sectionTitle: 'Selected Work',
  sectionSubtitle: 'A glimpse into recent projects',
  // Reference gallery section by id
  featuredSectionId: 'moments',
  // Or manually select images - add isLandscape: true for landscape photos
  manualSelection: [
    { src: '/images/gallery/selected/selected-1.jpg', alt: 'Featured work', isLandscape: true },
    { src: '/images/gallery/selected/selected-2.jpg', alt: 'Featured work' },
    { src: '/images/gallery/selected/selected-3.jpg', alt: 'Featured work' },
    { src: '/images/gallery/selected/selected-4.jpg', alt: 'Featured work', isLandscape: true },
    { src: '/images/gallery/selected/selected-5.jpg', alt: 'Featured work' },
    { src: '/images/gallery/selected/selected-6.jpg', alt: 'Featured work' },
  ],
  // Set to true to use manual selection instead of featured section
  useManualSelection: true,
};

// ============================================
// PRIVACY POLICY
// ============================================
export const privacyPolicyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'January 1, 2026',
  sections: [
    {
      heading: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you fill out our contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, phone number, and any other information you choose to provide.',
    },
    {
      heading: 'How We Use Your Information',
      content: 'We use the information we collect to:\n• Respond to your inquiries and provide customer service\n• Send you updates about our services (with your consent)\n• Improve our website and services\n• Comply with legal obligations',
    },
    {
      heading: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.',
    },
    {
      heading: 'Cookies',
      content: 'Our website may use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.',
    },
    {
      heading: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us through our contact page.',
    },
  ],
};

// ============================================
// TERMS OF SERVICE
// ============================================
export const termsOfServiceContent = {
  title: 'Terms of Service',
  lastUpdated: 'January 1, 2026',
  sections: [
    {
      heading: 'Agreement to Terms',
      content: 'By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the website.',
    },
    {
      heading: 'Intellectual Property',
      content: 'All content on this website, including but not limited to photographs, text, graphics, logos, and images, is the property of Sadik Visuals and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
    },
    {
      heading: 'Use of Images',
      content: 'The photographs displayed on this website are for viewing purposes only. Downloading, copying, or using any images without explicit written consent is strictly prohibited and may result in legal action.',
    },
    {
      heading: 'Limitation of Liability',
      content: 'In no event shall Sadik Visuals be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website.',
    },
    {
      heading: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these Terms of Service.',
    },
    {
      heading: 'Contact Us',
      content: 'If you have any questions about these Terms of Service, please contact us through our contact page.',
    },
  ],
};
