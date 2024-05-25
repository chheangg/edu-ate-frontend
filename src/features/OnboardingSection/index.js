import FirstBoarding from "./components/FirstBoarding";
import SecondBoarding from "./components/SecondBoard";

const OnboardingSection = ({stage, nextStageEvent}) => {
  if (stage === 0) {
    return <FirstBoarding nextStageEvent={nextStageEvent} />;
  }

  if (stage === 1) {
    return <SecondBoarding nextStageEvent={nextStageEvent} />;
  }
}


export default OnboardingSection