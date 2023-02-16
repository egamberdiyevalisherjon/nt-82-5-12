import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const ProductDetail = ({ product }) => {
  // const {
  //   query: { lyuboy },
  // } = useRouter();

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <Head>
        <meta name="description" content={product.title} />
      </Head>
      <Link href="/products">Back to products</Link>
      <h2>{product.title}</h2>
      <Image width={500} height={500} src={product.image} alt="" />
    </div>
  );
};

export default ProductDetail;

// SSR => Server Side Rendering
export async function getServerSideProps({ params: { lyuboy } }) {
  const data = await fetch(`https://fakestoreapi.com/products/${lyuboy}`).then(
    (res) => res.json()
  );

  return {
    props: {
      product: data,
    },
  };
}

// SSG => Static Site Generation (PreRendering)

// export async function getStaticProps({ params }) {
//   // const { data } =  axios.get(`/product/${lyuboy}`)

//   return {
//     props: {
//       product: {
//         title: "Iphone",
//         price: 1299,
//       },
//     },
//   };
// }

// export async function getStaticPaths({}) {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }
