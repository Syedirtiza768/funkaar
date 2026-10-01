"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import styles from "./legal.module.css";

type IProps = {
  title: string;
  updated?: string;
  eyebrow?: string;
  children: React.ReactNode;
};

// Shared shell for text-heavy pages (Privacy Policy, Terms & Conditions).
export default function LegalLayout({ title, updated, eyebrow = "Legal", children }: IProps) {
  useScrollSmooth();

  return (
    <Wrapper>
      <HeaderEleven />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className={styles.page}>
            <div className="container">
              <div className={styles.doc}>
                <p className={styles.eyebrow}>{eyebrow}</p>
                <h1 className={styles.title}>{title}</h1>
                {updated && <p className={styles.updated}>{updated}</p>}
                {children}
              </div>
            </div>
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
}

export const legalStyles = styles;
