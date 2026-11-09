export const siteConfig = {
  name: "Himalayan Travel",
  description:
    "Discover Himalayan journeys, trekking adventures, and pilgrimage tours.",

  navigation: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Our Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    // Replace these example values with the real business details.
    phoneDisplay: "+91-57655752 | +977-9812117278",
    phoneLink: "+91-57655752",
    whatsappNumber: "9779812117278",
    email: "overseastourandtravels70@gmail.com",
    location: "Ground Floor, Bldg No. 00, Shrikhandi Bhitta, Bhithamore, Sitamarhi, Bihar 843331",
    govReg: "10ICYPM6628G1Z4"
  },
} as const;