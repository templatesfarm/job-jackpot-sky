"use client";
import React from "react";

import { usePortfolioStore } from "@/store/usePortfolioStore";

import { HeroEditableWithAuth } from "portfolioui/job-jackpot";
import { useAppStore } from "@/store/appStore";

export const Hero = () => {
  const {
    portfolio: { heroInfo },
    isLoading,
    saveHeroInfo,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();

  const getBackgroundColorRGBA = (opacity: number) =>
    `rgba(50, 204, 255, ${opacity})`;

  const getBorderColor = (borderOpacity: number) =>
    `hsla(202, 100%, 50%, ${borderOpacity})`;

  return (
    <HeroEditableWithAuth
      isEditing={isEditing}
      heroInfo={heroInfo}
      saveHeroInfo={saveHeroInfo}
      isLoading={isLoading}
      backgroundColorFn={getBackgroundColorRGBA}
      borderColorFn={getBorderColor}
    />
  );
};
