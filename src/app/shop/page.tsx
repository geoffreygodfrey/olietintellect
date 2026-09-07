import { ShopHero } from "@/components/shop/ShopHero";
import { ProductExplorer } from "@/components/shop/ProductExplorer";
import { ShopPerks } from "@/components/shop/ShopPerks";
import { getProducts } from "@/lib/content";

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <ShopHero />
      <ProductExplorer products={products} />
      <ShopPerks />
    </>
  );
}