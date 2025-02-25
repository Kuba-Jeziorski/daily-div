type Props = {
  description: string;
  alt_description: string;
};

export const Title = ({ description, alt_description }: Props) => {
  if (!description && !alt_description) {
    return null;
  }

  return (
    <h3 className="xs:text-base xs:h-12 line-clamp-2 h-10 text-sm font-bold text-balance break-words text-white md:h-15 md:text-lg lg:line-clamp-3 lg:h-auto lg:text-xl">
      {description ?? alt_description}
    </h3>
  );
};
