type Props = {
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
};

export const LoadingIndicator = ({
  isFetchingNextPage,
  hasNextPage = false,
}: Props) => {
  if (isFetchingNextPage) {
    return <p>Loading more</p>;
  }
  if (hasNextPage) {
    return <p>Scroll for more</p>;
  }
  return <p>No more posts</p>;
};
