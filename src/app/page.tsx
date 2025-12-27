import { SVGcomponent } from "@/components/SVGcomponent";
import { SVGlines } from "@/components/SVGlines";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 mx-auto flex-col py-20 ">
        <SVGlines/>
    </main>
  );
}
