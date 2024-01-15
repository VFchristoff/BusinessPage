// src/App.js

import React from 'react';
import Homepage from './components/Homepage';
import About from './components/About';
import DynamicColumnsBox from "./components/DynamicColumnsBox";
import DynamicColumnsBox_Image from "./components/DynamicColumnsBox_Image";

const titleContentSolutions = ['Finance', 'Health Industry', 'Tech Corporations'];
const descriptionContent = [
    'Our professionals will assist you with all the aspects of your taxes related to business, general income, profit & loss, business income and deductions. For instance, you will be able to understand how to use MS Excel charting for effective tax planning and you will be able to file tax returns on your own with our tax specialists from all around the globe.',
    'We are engaged in running awareness campaigns in collaboration with Department of Manpower. On a more regional basis, each part of the world has its own situation and needs for its market. We are trying to make the most of the opportunities. We develop hybrid models where we combine machine learning with human intelligence, leveraging both to produce better predictions at a far faster rate than what we would have done with a purely machine.',
    'Our main clients are big tech corporations and it is a safe bet that they will continue to use the egress formatter. It takes a lot of repetitive and repetitive labor and automation to copy and paste things manually, so copy&pastation is alive and well in data centers.'
];

const titleContentHeadquarters = ['London', 'Tokyo', 'New York'];
const imageUrlsContent = [
    require('./images/front-page/locations/location1.jpeg'),
    require('./images/front-page/locations/location2.jpeg'),
    require('./images/front-page/locations/location3.jpeg'),
];

const App = () => {
  return (
      <div>
        <Homepage />
        <About
            id="solutions"
            title="Solutions We Offer"
            description="We offer solutions for finance field, health industry and big tech corporation to make them competitive and self-sufficient. Aurora is positioned to help the world's biggest corporations becoming more successful than ever before. Our B2B Enterprise Service Provider (ESP) services allow our customers the opportunity to extend their reach by offering their products and services to millions of potential clients. With solutions in cloud computing, application development, project management, networking, business continuity, mobile technology and more, we are able to simplify and streamline the daily operations of enterprise customers, no matter how complicated or broad their businesses might be."
        />
        <DynamicColumnsBox title={titleContentSolutions} description={descriptionContent} />
        <About
            id="headquarters"
            title="Headquarters"
            description="Our company operates from three strategically located headquarters, each focusing on specific technological domains. With cutting-edge expertise in nanomaterials, solar panels, microprocessors, and nano-based clinical trials, we are at the forefront of technological advancements. Our headquarters are equipped with state-of-the-art facilities and a dedicated team of experts, working tirelessly to drive innovation and deliver groundbreaking solutions. We pride ourselves on our commitment to excellence and the pursuit of scientific breakthroughs that positively impact industries and communities worldwide. Join us on this exciting journey as we shape the future of technology through our headquarters' pioneering efforts."
        />
      <DynamicColumnsBox_Image title={titleContentHeadquarters} imageUrls={imageUrlsContent} />
      <About
        id="tech"
        title="Our Technologies"
        description="At our company, we have established headquarters in three strategic locations, and our focus lies in pioneering cutting-edge technologies that have redefined industries. Our expertise spans across nanomaterials, solar panels, microprocessors, and nano-based clinical trials. With nanotechnology as our driving force, we engineer materials at the nanoscale, unlocking extraordinary properties that revolutionize electronics, healthcare, energy, and more. In the realm of renewable energy, we lead the way in designing and manufacturing state-of-the-art solar panels that efficiently convert sunlight into clean electricity. Our mastery of microprocessors enables us to develop high-performance computing components that power a diverse range of devices. Additionally, we leverage nanotechnology to enhance clinical trials, employing nanoscale drug delivery systems, diagnostic tools, and therapeutic approaches to optimize treatment efficacy and transform healthcare outcomes. Through our unwavering commitment to technological advancement, we are shaping a brighter future, fueled by nanomaterials, solar panels, microprocessors, and innovative nano-based clinical trials."
        />
        <About
            id="clients"
            title="What our clients says"
            description="We work with many companies and not every company uses the standards of quality workmanship and amenities. We only choose those that really strive to meet our requirements. They are our highest quality."
        />
      </div>
  );
};

export default App;

