import { useOnboardingStore } from "../../stores/onboarding";
import FirstBoarding from "./components/FirstBoarding";
import SecondBoarding from "./components/SecondBoard";

const OnboardingSection = () => {
  const stage = useOnboardingStore((store) => store.stage)
  if (stage === 0) {
    return <FirstBoarding />;
  }

  if (stage === 1) {
    return <SecondBoarding />;
  }
}


export default OnboardingSection