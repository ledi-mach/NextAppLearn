import Link from 'next/link';

function Products() {
    return(
    <>
    <p>
      <Link href='/'>
        <a>Voltar para home</a>
      </Link>
    </p>
    
    <h1>Página de produtos</h1>
    </>
    )
}

export default Products;