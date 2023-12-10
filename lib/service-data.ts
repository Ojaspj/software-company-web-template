 const titles = [
  "Mobile App Development",
  "Web Development",
  "Ecommerce Solutions",
  "UI UX Design",
];
 const descriptions = [
  "Drive Success with Silicontech Nepal's Dynamic Digital Marketing Services for Mobile App Development",
  "Elevate your brand with our cutting-edge Web Development solutions",
  "Craft seamless user experiences with our UI/UX Design expertise",
  "Craft seamless user experiences with our UI/UX Design expertise",
];

export const components = titles.map((title, index) => ({
  title,
  href: `/services/${title.substring(0, 25).toLowerCase().replace(/\s/g, "-")}`,
  description: descriptions[index],
  offerings: [
    {
      name: "Custom Web Development",
      description:
        "Unleash the power of a website that reflects your brand identity. Our custom web development services ensure a tailored online presence, incorporating cutting-edge technologies and design trends.",
    },
    {
      name: "Responsive Design",
      description:
        "In today's mobile-centric world, we prioritize responsive design to guarantee a seamless user experience across all devices. Your website will look stunning and function flawlessly, whether viewed on a desktop, tablet, or smartphone.",
    },
    {
      name: "E-commerce Solutions",
      description:
        "Open the doors to a global marketplace with our e-commerce development expertise. From secure payment gateways to intuitive product catalogs, we build e-commerce platforms that drive sales and enhance user engagement.",
    },
    {
      name: "Content Management Systems (CMS)",
      description:
        "Take control of your website content effortlessly with our CMS solutions. We empower you with user-friendly interfaces, allowing you to manage and update your website content without technical expertise.",
    },
    {
      name: "Performance Optimization",
      description:
        "Speed matters. Our web development team ensures that your website not only looks great but performs optimally. From fast-loading pages to efficient code, we prioritize performance for a superior user experience.",
    },
  ],
  whyChooseUs: {
    points: [
      "Expertise: Our team consists of seasoned developers with a proven track record in creating dynamic and feature-rich websites.",
      "Innovation: Stay ahead in the digital landscape with innovative web solutions that align with the latest industry trends.",
      "Collaboration: We believe in transparent communication and collaborative partnerships. Your goals are our goals.",
    ],
  },
}));

