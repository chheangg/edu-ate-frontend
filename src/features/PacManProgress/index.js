import { useOnboardingStore } from "../../stores/onboarding"
import PacManDot from "./components/PacManDot"
import PacManIcon from "./components/PacManIcon"

const progressList = [
  {
    id: 1,
    content: 'Select the location',
  },
  {
    id: 2,
    content: 'Area of Interests',
  },
  {
    id: 3,
    content: 'Start to ATE',
  }
]

const PacManProgress = () => {
  const stage = useOnboardingStore((state) => state.stage)
  return (
    <>
      <div className="grid grid-cols-[1fr,auto,auto,auto,1fr,auto,auto,auto,1fr] gap-2 items-center justify-items-center px-8">
        <PacManIcon index={1} isLoaded />
        <PacManDot isLoaded={stage >= 1} />
        <PacManDot isLoaded={stage >= 1} />
        <PacManDot isLoaded={stage >= 1} />
        <PacManIcon isLoaded={stage >= 1} index={2} />
        <PacManDot isLoaded={stage >= 2} />
        <PacManDot isLoaded={stage >= 2} />
        <PacManDot isLoaded={stage >= 2} />
        <PacManIcon isLoaded={stage >= 2} index={3} />
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        {progressList.map((p) => (
          <div className="text-purple-100 text-sm" key={p.id}>{p.content}</div>
        ))}
      </div>
    </>
  )
}

export default PacManProgress;