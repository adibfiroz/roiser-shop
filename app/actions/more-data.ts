"use server";

import prismadb from "@/lib/prismadb";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProductParams {
  categories?: string;
  sort?: string;
  page: number;
}

export const getMoreProduct = async (params: IProductParams) => {
  try {
    const { categories = "", sort, page } = params;

    const query: any = {};

    let orderByClause: any = [];

    if (categories && categories !== "undefined") {
      const categoryArray = categories.split(",");
      query.category = { in: categoryArray };
    }

    if (sort === "popular") {
      orderByClause = [{ createdAt: "desc" }];
    }

    const products = await prismadb.product.findMany({
      where: query,
      orderBy: orderByClause,
      take: 9,
      skip: (page - 1) * 9,
    });

    const totalProducts = await prismadb.product.count({
      where: query,
    });

    const hasMore = page && page * 9 < totalProducts;

    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = products.map((product) => ({
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt?.toISOString(),
    }));

    return { data, hasMore };
  } catch (error: any) {
    throw new Error(error);
  }
};
