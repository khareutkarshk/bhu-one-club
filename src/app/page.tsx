"use client"
import Image from "next/image";
import { useState } from "react";
import logo from "@/asset/one_logo.webp"
import { GiBlackHandShield } from "react-icons/gi";
import { MdOutlineQuiz } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import bhu from "@/asset/bhu-logo.png";
import Main from "@/Components/Main";
import { useRouter } from "next/navigation";
import event0 from '@/asset/event_0.png'
import event1 from '@/asset/event_1.png'
import event2 from '@/asset/event_2.png'
import Sidebar from "@/Components/Sidebar";
export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const clickHandler = (path: string) => {
    router.push(path);
  }
  return (
    <>

      <div className="flex h-full bg-gray-200">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>

        <div className="w-full bg-gray-100 min-h-dvh">
          <header className="p-4">
            {
              !isOpen && (
                <button onClick={toggleSidebar} className="p-4 text-2xl sm:hidden">
                  <FaBarsStaggered></FaBarsStaggered>
                </button>
              )
            }
            <div className="float-right	">

              <Image className="mix-blend-darken" src={bhu} alt="bhu-logo" width={250}></Image>
            </div>

          </header>

          {/* Your main content goes here */}
          <main className="p-8">
            <Main></Main>
            
          </main>
        </div>
      </div>
    </>
  );
}
