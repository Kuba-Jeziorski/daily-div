import { Link } from "react-router";
import { PictureResult } from "../../../constants/types";
import { Tags } from "./tags";

type Props = {
  image: PictureResult;
};

export const ListingElement = ({ image }: Props) => {
  const { urls, id, description, alt_description, topic_submissions } = image;
  const { small: src_small } = urls;

  const tags = Object.keys(topic_submissions);

  return (
    <article className="border-border bg-listing-element hover:border-gray-default-opacity-60 min-h-90 rounded-xl border transition-[border] duration-300">
      <Link
        to="#"
        className="flex h-full w-full flex-col justify-between p-2"
        data-id={id}
      >
        <div className="px-2">
          <div className="flex">
            <p>author</p>
          </div>
          <h3 className="line-clamp-3 text-xl font-bold break-words text-white">
            {description ?? alt_description}
          </h3>
        </div>

        <div>
          <div className="mt-auto">
            <Tags tags={tags} />
          </div>
          <div className="relative">
            <img
              src={src_small}
              alt={alt_description}
              loading="lazy"
              className="aspect-video rounded-xl object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-slate-950 opacity-40"></div>
          </div>
          <div>likes, comment, bookmarks, link</div>
        </div>
      </Link>
    </article>
  );
};
