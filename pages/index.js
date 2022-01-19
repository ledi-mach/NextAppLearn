import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div>Home</div>
    <p>
      <Link href='/orders'>
        <a>Pedidos</a>
      </Link>
    </p>
    <p>
      <Link href='/products'>
        <a>Produtos</a>
      </Link>
    </p>
    </>
  )
}
