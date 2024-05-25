import { useState } from "react";
import Button from "../components/Button/Button";
import FullScreenLayout from "../components/layouts/FullScreenLayout";
import PacManProgress from "../features/PacManProgress";

const OnboardingPage = () => {
  const [stage, setStage] = useState(0);
  return (
    <FullScreenLayout>
      <div className="py-20">
        <PacManProgress stage={stage} />
        <h1 className="text-center text-4xl font-bold text-purple-100 mt-16">Welcome!</h1>
        <h2 className="text-center text-3xl font-semibold text-purple-100 mt-12">{"Let's start to ATE <3"}</h2>
      </div>
      <div className="mt-20 flex flex-col px-10 gap-8">
        <Button onClick={() => setStage(stage + 1)} className='text-2xl text-purple-100 font-thin'>Opportunities Around Me 🏡</Button>
        <Button onClick={() => setStage(stage + 1)} className='text-2xl text-purple-100 font-thin'>All of the opportunities 😎</Button>
      </div>
    </FullScreenLayout>
  )
}

export default OnboardingPage