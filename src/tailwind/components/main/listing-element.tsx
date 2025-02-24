import { Link } from "react-router";
import { PictureResult } from "../../../constants/types";
import { Tags } from "./tags";
import { useState } from "react";
import { UserPortrait } from "./single-element/user-portrait";
import { Title } from "./single-element/title";
import { CoverImg } from "./single-element/cover-img";
import { Like } from "./single-element/like";
import { Dislike } from "./single-element/dislike";
import { Discussion } from "./single-element/discusion";
import { Bookmark } from "./single-element/bookmark";
import { TheLink } from "./single-element/the-link";

type Props = {
  image: PictureResult;
};

export const ListingElement = ({ image }: Props) => {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const {
    urls,
    id,
    likes,
    description,
    alt_description,
    topic_submissions,
    user,
  } = image;
  const { small: src_small } = urls;
  const user_img = user.profile_image.small;

  const tags = Object.keys(topic_submissions);

  const handleArrowUp = () => {
    console.log(`clicked`);
    setIsArrowUp((prev) => !prev);
    if (!isArrowUp) {
      setIsArrowDown(false);
    }
  };
  const handleArrowDown = () => {
    setIsArrowDown((prev) => !prev);
    if (!isArrowDown) {
      setIsArrowUp(false);
    }
  };
  const handleSaved = () => setIsSaved(!isSaved);

  return (
    <article className="border-border bg-listing-element hover:border-gray-default-opacity-60 min-h-96 rounded-2xl border transition-[border] duration-300">
      <Link
        to="#"
        className="flex h-full w-full flex-col justify-between p-2"
        data-id={id}
      >
        <div className="px-2">
          <UserPortrait user_img={user_img} />
          <Title description={description} alt_description={alt_description} />
        </div>

        <div>
          <div className="mt-auto">
            <Tags tags={tags} />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <CoverImg src_small={src_small} alt_description={alt_description} />
            <div className="absolute top-0 left-0 h-full w-full bg-slate-950 opacity-40"></div>
          </div>
          <div className="!mt-2 flex h-8 justify-between">
            <div className="bg-gray-brighten flex h-full rounded-xl">
              <div className="flex h-full items-center">
                <Like
                  handleFunction={handleArrowUp}
                  likes={likes}
                  state={isArrowUp}
                />
                <Dislike handleFunction={handleArrowDown} state={isArrowDown} />
              </div>
            </div>
            <Discussion />
            <Bookmark handleFunction={handleSaved} state={isSaved} />
            <TheLink />
          </div>
        </div>
      </Link>
    </article>
  );
};
