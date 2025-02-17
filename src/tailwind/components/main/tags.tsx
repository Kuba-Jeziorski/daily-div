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
    <ul className="!mt-2 flex items-center gap-2 px-2 pb-2">
      {tags.map((tag) => {
        return (
          <p
            className="border-border text-gray-default-opacity-60 rounded-[8px] border px-2 py-1 text-xs"
            key={tag}
          >
            #{tag}
          </p>
        );
      })}
      {extraTagsNumber > 0 ? (
        <p className="border-border text-gray-default-opacity-60 rounded-[8px] border px-2 py-1 text-xs">
          +{extraTagsNumber}
        </p>
      ) : (
        ""
      )}
    </ul>
  );
};
