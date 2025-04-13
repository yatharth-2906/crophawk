import './App.css'
import News from './News'
import Headder from './Headder'
import Footter from './Footter'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import FertRecPage from './FertRecPage'
import CropRecPage from './CropRecPage'
import { UserProvider } from './CONTEXT_PROVIDERS/UserProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/sign_up", element: <SignupPage /> },
  { path: "/", element: <> <Headder/> <HomePage /> <Footter/> </> },
  { path: "/news", element: <> <Headder/> <News /> <Footter/> </> },
  { path: "/fertilizer_recommendation", element: <> <Headder/> <FertRecPage /> <Footter/> </> },
  { path: "/crop_recommendation", element: <> <Headder/> <CropRecPage /> <Footter/> </> }
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;