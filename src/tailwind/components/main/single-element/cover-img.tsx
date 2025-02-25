type Props = {
  src_small: string;
  alt_description?: string;
};

export const CoverImg = ({ src_small, alt_description }: Props) => {
  return (
    <img
      src={src_small}
      alt={alt_description ?? ""}
      loading="lazy"
      className="mt-auto aspect-video object-cover lg:mt-0"
    />
  );
};
