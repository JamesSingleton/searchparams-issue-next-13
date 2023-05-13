import Pagination from "./pagination";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}): Promise<Metadata> {
  const { page } = searchParams;
  const pageIndex = page !== undefined ? parseInt(page) : 1;

  return {
    title: `Page ${pageIndex}`,
  };
}

export async function generateStaticParams() {
  const categories = [
    { slug: "transfer-portal" },
    { slug: "d2" },
    { slug: "d3" },
    { slug: "fcs" },
    { slug: "fbs" },
  ];

  return categories.map((category: { slug: string }) => ({
    category: category.slug,
  }));
}

export default function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string };
}) {
  const { page } = searchParams;
  const pageIndex = page !== undefined ? parseInt(page) : 1;
  const totalPosts = 100;

  const totalPages = Math.ceil(totalPosts / 10);
  const nextDisabled = pageIndex === totalPages;
  const prevDisabled = pageIndex === 1;

  return (
    <div>
      <h1>Page {pageIndex}</h1>
      <Pagination
        currentPage={pageIndex}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        totalPosts={totalPosts}
        slug={`/news/${params.category}`}
      />
    </div>
  );
}
