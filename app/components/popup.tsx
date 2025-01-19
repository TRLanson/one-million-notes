import { Inter } from "next/font/google";

const inter = Inter({ weight: "400", subsets: ['latin'] });

export default function Popup({ message }: { message: string }) {


return (
  <div className="flex justify-center items-center w-96 h-60 rounded-lg bg-[#B88A60] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <p className={`${inter.className} text-2xl text-center`}>
      {message}
    </p>
  </div>
);
}
