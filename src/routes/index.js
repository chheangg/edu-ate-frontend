import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OnboardingPage from "../pages/OnboardingPage";
import CategoryPage from "../pages/CategoryPage";
import OpportunityPage from "../pages/OpportunityPage";

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
      },
      {
        path: 'category/:category_id',
        element: <CategoryPage />,
      },
      {
        path: 'opportunity/:opportunity_id',
        element: <OpportunityPage />,
      }
    ]
  }
])