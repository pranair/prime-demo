import './globals.css'
import { Button } from 'primereact/button';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';                       // core css
import Tailwind from "primereact/passthrough/tailwind";
import XButton from './components/XButton'
import XHeader from './components/XHeader';
import XNavbar from './components/XNavbar';


export default function Home() {
  const value = {
    ripple: false,
    unstyled: true, 
    pt: Tailwind,
  };

  return (
    <PrimeReactProvider>
      <XHeader></XHeader>
      <XNavbar></XNavbar>
      {/* <XButton label="Submit" className="p-96"/> */}
    </PrimeReactProvider>
  )
}