import React from 'react';
import { Helmet } from 'react-helmet'; // Add SEO
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about.jpg'; // make sure the path is correct

const AboutUs = () => {
  // SEO structured data for Organization/About
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GOTBAE",
    description: "GOTBAE is a UK-based digital agency offering web development, marketing, business solutions, e-commerce, design, app development, and more.",
    url: "https://gotbae.com",
    sameAs: [
      "https://www.linkedin.com/company/gotbae-ltd/posts/?feedView=all",
      "https://www.instagram.com/gotbaetd/",
      "https://x.com/Gotbaeltd",
      "https://www.facebook.com/profile.php?id=61567688457845&locale=en_GB"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Ashfield Lodge, NE4 6RL",
      addressLocality: "Newcastle Upon Tyne",
      addressCountry: "UK"
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white px-4">
      <Helmet>
        <title>About GOTBAE | Digital Experts UK</title>
        <meta
          name="description"
          content="Learn about GOTBAE: a passionate team of digital experts delivering innovative web, marketing, business, and creative solutions across the UK."
        />
        <meta
          name="keywords"
          content="GOTBAE, about, digital agency, UK, web development, e-commerce, digital marketing, business solutions, app development, creative team"
        />
        <meta name="author" content="GOTBAE" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">GOTBAE</span>
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-200">
          We're a passionate team of digital experts driving transformation through creative technology.
        </p>
      </div>
      {/* Story + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <p className="mb-6 leading-relaxed text-gray-200">
            GOTBAE is a leading UK-based company offering a comprehensive suite of digital services, including Web Development, Digital Marketing, Business Solutions, e-Commerce Services, Graphic Designing, Social Media Management, Affiliate Marketing, and App Development & Management. We are committed to delivering innovative, customized solutions that enable businesses to succeed in the digital era.
          </p>
          <p className="mb-6 leading-relaxed text-gray-200">
            Our team combines creativity and tech to deliver solutions that look great and deliver real results.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
            <span className="bg-white text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Quality</span>
            <span className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium">Results</span>
          </div>
          {/* Read More Button */}
          <Link to="/WhoWeAre">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Read More
            </button>
          </Link>
        </div>
        {/* Right Image with white background behind at bottom-right */}
        <div className="relative w-fit mx-auto">
          <img
            src={aboutImage}
            alt="Creative Team"
            className="relative z-10 rounded-lg shadow-2xl"
          />
          {/* White box at bottom-right */}
          <div className="absolute bottom-[-12px] right-[-12px] w-full h-full bg-white rounded-lg z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;