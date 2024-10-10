import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import image from "../assets/image.png";

export const navigationOptions = [
  {
    title: "Smartphone",
    dropdown: true,
    submenu: [
      {
        title: "S SERIES",
        items: [
          { image: image, name: "itel S55", price: "₹7,999" },
          { image: image, name: "itel S55+", price: "₹9,999" },
        ],
      },
      {
        title: "P SERIES",
        items: [
          { image: image, name: "itel P55", price: "₹7,999" },
          { image: image, name: "itel P55+", price: "₹9,999" },
        ],
      },
      {
        title: "A SERIES",
        items: [
          { image: image, name: "itel A55", price: "₹7,999" },
          { image: image, name: "itel A55+", price: "₹9,999" },
        ],
      },
    ],
  },
  {
    title: "Feature Phone",
    dropdown: false,
  },
  {
    title: "Smart TV",
    dropdown: true,
    submenu: [
      {
        title: "g series",
        items: [{ image: image, name: "g50ux", price: "₹30,599" }],
      },
      {
        title: "c series",
        items: [{ image: image, name: "c50ux", price: "₹70,999" }],
      },
    ],
  },
  {
    title: "Smart Gadgets",
    dropdown: true,
    submenu: [
      {
        title: "Audio",
        items: [
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
        ],
      },
      {
        title: "Power",
        items: [
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
        ],
      },
      {
        title: "Smart Devices",
        items: [
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
          { image: image, name: "T11 Pro", price: "₹1,299.00" },
        ],
      },
    ],
  },
  {
    title: "Home Care",
    dropdown: false,
  },
  {
    title: "Personal Care",
    dropdown: false,
  },
  {
    title: "About Us",
    dropdown: false,
  },
  {
    title: "Support",
    dropdown: true,
    submenu: [
      {
        title: "Exchange offers",
        href: "/exchange-offers",
      },
      {
        title: "Screen Replacement",
        href: "/screen-replacement",
      },
      {
        title: "Service Centres",
        href: "/service-centres",
      },
      {
        title: "E-Waste Management",
        href: "/e-waste-management",
      },
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
];

export const headerContactCards = [
  {
    icon: phone,
    header: "itel Customer Care",
    subheader: "1800-4190-525",
  },
  {
    icon: location,
    header: "Neraby Stores",
    subheader: "Get Directions",
  },
];
