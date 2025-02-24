import { useInfinitePicturesQuery } from "../../../common/utils/use-infinite-pictures-query";
import { ListingElement } from "./listing-element";
import { LoadingIndicator } from "./loading-indicator";
import { Observer } from "./observer";

export const Listing = () => {
  const { data, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePicturesQuery();

  if (!data) {
    return <p>No data</p>;
  }

  if (data?.pages[0].results === undefined) {
    return <p>Undefined data</p>;
  }

  return (
    <>
      <ul className="3xl:grid-cols-5 3xl:max-w-full 3xl:mx-0 mx-auto grid max-w-full grid-cols-2 gap-8 pt-8 xl:max-w-200 2xl:max-w-320 2xl:grid-cols-4">
        {data.pages.flatMap((page) =>
          page.results.map((image) => (
            <ListingElement key={image.id} image={image} />
          )),
        )}
      </ul>

      <Observer fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}>
        <LoadingIndicator
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </Observer>

      {isError && <div>Error fetch posts</div>}
    </>
  );
};
