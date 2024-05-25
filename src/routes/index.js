import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OnboardingPage from "../pages/OnboardingPage";

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'onboarding',
        element: <OnboardingPage />
      }
    ]
  }
])