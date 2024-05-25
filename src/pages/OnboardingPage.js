import { useEffect, useState } from "react";
import FullScreenLayout from "../components/layouts/FullScreenLayout";
import PacManProgress from "../features/PacManProgress";
import OnboardingSection from "../features/OnboardingSection";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../stores/onboarding";

const OnboardingPage = () => {
  const stage = useOnboardingStore((state) => state.stage)
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === 2 ){
      setTimeout(() => navigate('/'), 500)
    }
  }, [stage])

  return (
    <FullScreenLayout>
      <div className="pt-20" />
      <PacManProgress />
      <OnboardingSection />
    </FullScreenLayout>
  )
}

export default OnboardingPage