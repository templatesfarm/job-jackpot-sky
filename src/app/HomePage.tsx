"use client";
import PasswordInput from "@/components/PasswordInput";
import { Projects } from "@/components/portfolio/Projects";
import { PortfolioType, usePortfolioStore } from "@/store/usePortfolioStore";
import { useEffect } from "react";
import { ApplyChangesButton } from "@/components/ApplyChangesButton";
import { ScrollProgressView } from "portfolioui";
import ResumeAIChatbot from "@/components/chatbot-component";
import Navbar from "@/components/professional/Navbar";
import Footer from "@/components/professional/Footer";
import Hero from "@/components/professional/Hero";
import Skills from "@/components/professional/Skills";
import Achievements from "@/components/professional/Achievements";
import Contact from "@/components/professional/Contact";

interface HomePageProps {
  portfolio: PortfolioType;
  url: string;
}

export default function HomePage({ portfolio, url }: HomePageProps) {
  const { updateState } = usePortfolioStore();

  useEffect(() => {
    console.log("url: ", url);
    updateState(portfolio);
  }, [updateState, portfolio, url]);

  return (
    <div className="min-h-screen overflow-hidden space-y-10 w-full ">
      <div className="pb-5 relative mx-auto">
        <PasswordInput />
        <ApplyChangesButton />
        <ScrollProgressView className="from-sky-400 to-sky-700 via-sky-500" />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Contact/>
        <ResumeAIChatbot />
        <Footer />
      </div>
    </div>
  );
}
