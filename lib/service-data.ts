const titles = [
  "Mobile App Development",
  "Web Development",
  "Ecommerce Solutions",
  "UI UX Design",
];
const descriptions = [
  "Embark on a Journey of Innovation with Expert Mobile App Development Tailored to Your Vision",
  "Shaping the Digital Landscape: Your Gateway to Responsive, Scalable, and Dynamic Web Solutions",
  "Transform Your Online Presence with Our Ecommerce Solutions: Where Functionality Meets Aesthetics",
  "Crafting Intuitive and Aesthetically Pleasing Digital Experiences for Seamless User Engagement",

];
const overviews = [
  "Turn your app ideas into reality with our mobile app development services. We specialize in creating high-performance, user-friendly mobile applications that cater to the unique needs of your business and engage your target audience.",
  "Empower your online presence with our comprehensive web development services. We specialize in creating dynamic, responsive, and scalable websites tailored to meet your business objectives and user expectations.",
  "We specialize in providing cutting-edge ecommerce solutions tailored to meet the unique needs of your business. Our team of skilled software developers is committed to delivering robust and scalable solutions that empower your online presence.",
  "Elevate the user experience and visual appeal of your digital products with our UI/UX design services. We focus on creating interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.",
];

const offers = [
  [
    "Native and cross-platform mobile app development",
    "User-friendly interface design",
    "Scalable architecture for future growth",
    "Integration with device features (camera, GPS, etc.)",
    "Secure data storage and encryption",
    "Push notifications for user engagement",
    "Cross-device compatibility",
    "App store deployment and maintenance",
  ],
  [
    "Custom website development",
    "Front-end and back-end development",
    "Content management system (CMS) integration",
    "E-commerce website development",
    "Responsive web design for optimal viewing on all devices",
    "Web application development",
    "API integration for third-party services",
    "Performance optimization for faster loading times",
  ],

  [
    "Customized ecommerce website development",
    "Secure payment gateway integration",
    "User-friendly shopping cart implementation",
    "Mobile-responsive design for seamless user experience",
    "Inventory management and order tracking",
    "Integration with third-party tools and APIs",
    "Performance optimization for faster loading times",
    "Scalable architecture to accommodate business growth",
  ],
  [
    "User research and persona development",
    "Wireframing and prototyping",
    "Responsive and interactive interface design",
    "Usability testing and feedback integration",
    "Branding and visual identity design",
    "Design system creation and implementation",
    "Accessibility and inclusivity considerations",
    "Cross-platform and cross-device consistency",
  ],
];
const whyUs = [
  "Choose us for your mobile app development needs to benefit from our in-depth expertise in crafting high-performance and user-friendly applications. We are committed to delivering solutions that not only meet your technical requirements but also captivate your audience. Our team thrives on innovation, ensuring your mobile app stands out in the crowded app stores and provides a seamless user experience.",
  "Partner with us for web development solutions that go beyond the ordinary. Our team combines technical expertise with creative flair to deliver websites that not only look stunning but also perform seamlessly. We are committed to staying ahead of the curve, ensuring your web presence aligns with the latest industry trends and standards.",
  "Choose us as your ecommerce solution partner for a seamless and efficient online shopping experience. Our team brings a wealth of experience in developing successful ecommerce platforms for a diverse range of businesses. We are dedicated to understanding your unique requirements and delivering solutions that not only meet but exceed your expectations. With a focus on innovation, security, and scalability, we ensure that your ecommerce website stands out in the competitive online marketplace. Partner with us to transform your digital storefront and drive business growth.",
  "Transform your digital products into visually stunning and highly usable experiences with our UI/UX design expertise. We prioritize user-centric design principles, ensuring that your audience not only engages with your product but enjoys a seamless and memorable interaction. Choose us for a design partnership that enhances both aesthetics and functionality.",
];

export const components = titles.map((title, index) => ({
  title,
  href: `/services/${title.substring(0, 25).toLowerCase().replace(/\s/g, "-")}`,
  description: descriptions[index],
  overview: overviews[index],
  offers: offers[index],
  whyUs: whyUs[index],
}));
