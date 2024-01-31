import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="text-6xl my-10 font-bold leading-[5rem] text-secondary-content">
              Plutus Project-Based Learning 2024
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-content">made by Gimbalabs</p>
            <div className="flex flex-row gap-5 my-5">
              <div className="btn btn-success btn-sm rounded-full">
                <Link href="/course">Start PPBL 2024</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
