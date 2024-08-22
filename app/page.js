import Link from "next/link";
import LandingPage from "../app/dashboard/_components/Home";
import Header from './dashboard/_components/Header'


//import Image from "next/image";
export default function Home() {
  return (
   <div>
      <Header /> 

    <LandingPage/>
   

 {/*
 
  <h2>Hello</h2>
   <Link href={'/dashboard'}> Dasboard</Link>
   <Link href={'/dashboard'}> Interview </Link>


 */}
  </div>

  );
}
