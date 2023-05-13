import Pagination from "../pagination";

export default async function Page({
  params,
  searchParams,
}: {
  params: { category: string; subcategory: string };
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
        slug={`/news/${params.category}/${params.subcategory}`}
      />
    </div>
  );
}
