import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import HomePage from "../Components/HomePage";
import Products from "../Components/Products";
import Featured from "../Components/Featured";
import { useSelector } from "react-redux";
import Link from "next/link";
import NewRes from "../Components/NewRes";
export default function Home() {
  let { cartItems } = useSelector((state) => state.ASRStore);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
        <Featured />
        <Products />
        <NewRes />
        {cartItems.length > 0 ? (
          <Link href="/cart">
            <i
              className="bi bi-basket toCart"
              data-length={cartItems.length}
            ></i>
          </Link>
        ) : (
          ""
        )}
      </main>
    </>
  );
}
