import ButtonAlternative from "../../../components/Button/ButtonAlternative"
import DropDown from "../../../components/Dropdown"
import Field from "../../../components/Field"
import { useOnboardingStore } from "../../../stores/onboarding"

const SecondBoarding = () => {
  const nextStage = useOnboardingStore((state) => state.nextStage)
  return (
    <div className="px-12">
      <h3 class="mt-16 text-2xl text-center text-purple-100 font-bold mb-12">Please indicate your interest:</h3>
      <DropDown>
        - Select up to three -
      </DropDown>
      <div className="py-6 grid grid-cols-3 w-full gap-4">
        <Field />
        <Field />
        <Field />
      </div>
      <div className="flex justify-center mt-20">
        <ButtonAlternative onClick={nextStage} className={'text-purple-400 text-2xl'}>
          Start to ATE
        </ButtonAlternative>
      </div>
    </div>
  )
}

export default SecondBoarding