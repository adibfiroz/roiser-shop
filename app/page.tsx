import { PageProps } from "@/.next/types/app/layout";
import HeaderNav from "@/components/header-nav";
import ProductClient from "@/components/product-client";
import SidebarFilters from "@/components/sidebar-filters";
import prismadb from "@/lib/prismadb";


const Home = async ({ searchParams }: PageProps) => {

  const { categories, sort } = await searchParams;
  const decodedString = decodeURIComponent(categories);

  const query: any = {}

  let orderByClause: any = {}

  if (categories) {
    const categoryArray = categories.split(","); // Convert string to array
    query.category = { in: categoryArray }; // Prisma filter for multiple categories
  }

  if (sort === "popular") {
    orderByClause = [{ createdAt: "desc" }];
  }

  const getProducts = await prismadb.product.findMany({
    where: query,
    orderBy: orderByClause,
    take: 9,
    skip: 0
  })

  const safeData = getProducts.map((product) => ({
    ...product,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt?.toISOString()
  }));

  return (
    <div>
      <HeaderNav
        title='Shop Grid'
        breadcrumb='Shop Grid'
      />
      <div className="container mx-auto p-4  mt-5 md:mt-16">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <ProductClient
              getProducts={safeData}
              decodedString={decodedString}
              sort={sort}
            />
          </div>
          <SidebarFilters />
        </div>
      </div>
    </div>
  );
}

export default Home
