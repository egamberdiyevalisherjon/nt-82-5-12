import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((p) => {
        return (
          <Link href={`products/${p.id}`} key={p.id}>
            <h2>{p.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  let data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return {
    props: {
      products: data,
    },
  };
}
