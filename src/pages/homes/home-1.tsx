'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import VideOne from "@/components/video/video-one";
import BrandOne from "@/components/brand/brand-one";
import ServiceOne from "@/components/service/service-one";
import ServiceTwo from "@/components/service/service-2";
import ServiceThree from "@/components/service/service-3";
import ServiceFour from "@/components/service/service-4";
import ServiceSix from "@/components/service/service-5";
import ServiceFive from "@/components/service/service-one";
import ProjectOne from "@/components/project/project-text-line";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import Testimonial from "@/components/studio-panels/studio-panel-44";
import PortfolioShowcaseMain from "@/pages/portfolio/portfolio-showcase-main";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderEleven from "@/layouts/headers/header-eleven";

// images
import shape_1 from '@/assets/img/home-01/footer/footer-circle-shape-1.png';
import shape_2 from '@/assets/img/home-01/footer/footer-circle-shape-2.png';

// animation
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { bounceAnimation, charAnimation, fadeAnimation } from "@/utils/title-animation";

const HomeMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  // useEffect(() => {
  //   if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
  //     cursorAnimation();
  //   }
  // },[]);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // videoAnimOne(); // disabled: pinned the logo strip so the next section overlapped it
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
           trigger: ".tp-project-full-img-wrap",
           start: "top 65",
           end: "bottom 0%",
           pin: ".tp-project-full-img",
           pinSpacing: false,
        }
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100)
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper showBackToTop={false}>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}


      {/* header area start */}
     <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            
            {/* hero area start */}
            <HeroBannerOne />
            {/* hero area end */}

            {/* video area */}
            <VideOne />
            {/* video area */}

            {/* brand area */}
            {/* <BrandOne /><br /><br /> */}
            {/* brand area */}
            
            {/* service area */}
            <ServiceOne />
            <ServiceSix />
            <ServiceTwo />
            <ServiceThree />
            <ServiceFour /><br /><br />
            {/* service area */}
            
            {/* service area */}
            <ProjectOne />
            {/* service area */}

            <PortfolioShowcaseMain />
            
            {/* testimonial area */}
            <Testimonial /><br /><br />
            {/* testimonial area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>

      {/* footer shape */}
      {/* <div className="tp-footer-shape-wrap z-index-5 smooth">
        <Link href="/contact">
            <div className="tp-footer-shape p-relative">
                <Image className="img-1" src={shape_1} alt="shape"/>
                <Image className="img-2" src={shape_2} alt="shape"/>
                <span></span>
            </div>
          </Link>
        </div> */}
      {/* footer shape */}
    </Wrapper>
  );
};

export default HomeMain;