type Props = {
  description: string;
  alt_description: string;
};

export const Title = ({ description, alt_description }: Props) => {
  if (!description && !alt_description) {
    return null;
  }

  return (
    <h3 className="line-clamp-3 text-xl font-bold break-words text-white">
      {description ?? alt_description}
    </h3>
  );
};
