import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      About
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default About;
