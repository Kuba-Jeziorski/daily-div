type Props = {
  user_img: string;
};

export const UserPortrait = ({ user_img }: Props) => {
  if (!user_img) {
    return null;
  }

  return (
    <div className="flex pt-2 pb-3">
      <img className="aspect-square h-8 rounded-full" src={user_img} />
    </div>
  );
};
