import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient()

const App = () => (
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)

export default App