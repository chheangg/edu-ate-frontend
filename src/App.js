import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
)

export default App