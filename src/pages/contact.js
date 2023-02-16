import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      Contact
      <Link href="/about">About</Link>
    </div>
  );
};

export default Contact;
