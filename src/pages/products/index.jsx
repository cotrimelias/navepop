import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import { MoreButton } from "../../components/more-button"
import { title } from "./index.module.css"

// export default function Products({ data: { products } }) {
//   return (
//     <Layout>
//       <Seo title="All Products" />
//       <h1 className={title}>Produtos</h1>
//       <ProductListing products={products.nodes} />
//       {products.pageInfo.hasNextPage && (
//         <MoreButton to={`/search#more`}>Mais produtos</MoreButton>
//       )}
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     products: allShopifyProduct(
//       sort: { fields: publishedAt, order: ASC }
//       limit: 24
//     ) {
//       nodes {
//         ...ProductCard
//       }
//       pageInfo {
//         hasNextPage
//       }
//     }
//   }
// `

const Products = () => {
  ;<StaticQuery
    query={graphql`
      {
        products: allShopifyProduct(
          sort: { fields: publishedAt, order: ASC }
          limit: 24
        ) {
          nodes {
            ...ProductCard
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `}
    render={({ data: products }) => (
      <Layout>
        <Seo title="All Products" />
        <h1 className={title}>Produtos</h1>
        <ProductListing products={products.nodes} />
        {products.pageInfo.hasNextPage && (
          <MoreButton to={`/search#more`}>Mais produtos</MoreButton>
        )}
      </Layout>
    )}
  />
}

export default Products
