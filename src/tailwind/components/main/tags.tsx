type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => {
  let tagsLength = tags.length;
  const extraTagsNumber = tagsLength - 2;

  if (tagsLength > 2) {
    tagsLength = 2;
  }

  return (
    <ul className="group mt-2 hidden items-center gap-2 px-2 pb-2 lg:flex">
      {tags.map((tag) => {
        return (
          <p
            className="border-border text-gray-default-opacity-60 rounded-[8px] border px-2 py-1 text-xs 2xl:block [&:nth-child(n+3)]:hidden"
            key={tag}
          >
            #{tag}
          </p>
        );
      })}
      {extraTagsNumber > 0 ? (
        <p className="border-border text-gray-default-opacity-60 hidden rounded-[8px] border px-2 py-1 text-xs 2xl:block">
          +{extraTagsNumber}
        </p>
      ) : (
        ""
      )}
    </ul>
  );
};
