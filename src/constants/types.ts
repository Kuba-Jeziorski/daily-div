export type PictureResult = {
  id: string;
  alt_description: string;
  description: string;
  likes: number;
  urls: {
    small: string;
  };
  topic_submissions: {
    [key: string]: object;
  };
};

export type PictureId = {
  pictureId: string;
};

export type PicturePage = {
  results: PictureResult[];
  total: number;
  total_pages: number;
};

export type TagProps = {
  title: string;
};
