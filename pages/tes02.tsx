import Head from "next/head"
import tes01 from "../styles/Tes01.module.css"

export default function Tes01(): JSX.Element {
  return (
    <div className={tes01.container}>
      <Head>
        <title>Tes01</title>
      </Head>
      <div className={tes01.gg_album}></div>
    </div>
  )
}
