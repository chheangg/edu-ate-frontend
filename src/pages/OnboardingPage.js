import { useEffect, useState } from "react";
import FullScreenLayout from "../components/layouts/FullScreenLayout";
import PacManProgress from "../features/PacManProgress";
import OnboardingSection from "../features/OnboardingSection";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const [stage, setStage] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (stage === 2 ){
      setTimeout(() => navigate('/'), 500)
    }
  }, [stage])
  return (
    <FullScreenLayout>
      <div className="pt-20" />
      <PacManProgress stage={stage} />
      <OnboardingSection stage={stage} nextStageEvent={() => setStage(stage + 1)} />
    </FullScreenLayout>
  )
}

export default OnboardingPage