import Button from "../../../components/Button/Button"
import { useOnboardingStore } from "../../../stores/onboarding"

const FirstBoarding = () => {
  const nextStage = useOnboardingStore((state) => state.nextStage)

  const findLocalOpportunitiesEvent = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };
    
    function success(pos) {
      const crd = pos.coords;
  
      nextStage()
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  const findInternationalOpportunity = () => {
    nextStage()
  }
  

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-purple-100 mt-16">Welcome!</h1>
      <h2 className="text-center text-3xl font-semibold text-purple-100 mt-12">{"Let's start to ATE <3"}</h2>
      <div className="mt-20 flex flex-col px-10 gap-8">
        <Button onClick={findLocalOpportunitiesEvent} className='text-2xl text-purple-100 font-thin'>Opportunities Around Me 🏡</Button>
        <Button onClick={findInternationalOpportunity} className='text-2xl text-purple-100 font-thin'>All of the Opportunities 😎</Button>
      </div>
    </>
  )
}

export default FirstBoarding