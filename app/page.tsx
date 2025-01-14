import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center text-white p-4">
      <main className="flex flex-col text-center justify-center max-w-3xl mx-auto h-dvh">
         <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 
           mx-auto text-white sm:text-2xl">
          <h1>Hamza's Computer</h1>
          <address>
            555 gateway
          </address>
          <p>
            open daily 9am to 9pm
          </p>
          <Link href="tel:555-555-5555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>);
}
