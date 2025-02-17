import { useState } from "react";
import {
  SIDEBAR_ADVERTISE_LABEL,
  SIDEBAR_CHANGELOG_LABEL,
  SIDEBAR_CUSTOM_FEED_LABEL,
  SIDEBAR_DISCUSSION_LABEL,
  SIDEBAR_DOCS_LABEL,
  SIDEBAR_EXPLORE_LABEL,
  SIDEBAR_FEEDBACK_LABEL,
  SIDEBAR_FIND_SQUADS_LABEL,
  SIDEBAR_FOLLOWING_LABEL,
  SIDEBAR_HISTORY_LABEL,
  SIDEBAR_LEADERBOARDS_LABEL,
  SIDEBAR_MY_FEED_LABEL,
  SIDEBAR_NEW_FOLDER_LABEL,
  SIDEBAR_NEW_SQUAD_LABEL,
  SIDEBAR_QUICK_SAVES_LABEL,
  SIDEBAR_READ_IT_LATER_LABEL,
  SIDEBAR_SOURCES_LABEL,
  SIDEBAR_SUBMIT_LINK_LABEL,
  SIDEBAR_TAGS_LABEL,
  SIDEBAR_TITLE_BOOKMARKS,
  SIDEBAR_TITLE_CUSTOM_FEEDS,
  SIDEBAR_TITLE_DISCOVER,
  SIDEBAR_TITLE_MENU,
  SIDEBAR_TITLE_NETWORK,
  SIDEBAR_TITLE_RESOURCES,
} from "../../constants/constants";
import { Record } from "./sidebar/record";
import { RecordsWrapper } from "./sidebar/records-wrapper";
import { UserImg } from "./sidebar/user-img";
import { SvgAdvertise } from "./svgs/svg-advertise";
import { SvgChangelog } from "./svgs/svg-changelog";
import { SvgDiscussion } from "./svgs/svg-discussion";
import { SvgDocs } from "./svgs/svg-docs";
import { SvgExplore } from "./svgs/svg-explote";
import { SvgFeedback } from "./svgs/svg-feedback";
import { SvgFindSquads } from "./svgs/svg-find-squads";
import { SvgFollowing } from "./svgs/svg-following";
import { SvgHistory } from "./svgs/svg-history";
import { SvgLeaderboard } from "./svgs/svg-leaderboards";
import { SvgPlus } from "./svgs/svg-plus";
import { SvgQuickSaves } from "./svgs/svg-quick-saves";
import { SvgReadItLater } from "./svgs/svg-read-it-later";
import { SvgSidebarHide } from "./svgs/svg-sidebar-hide";
import { SvgSources } from "./svgs/svg-sources";
import { SvgSubmitALink } from "./svgs/svg-submit-a-link";
import { SvgTags } from "./svgs/svg-tags";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`bg-main border-border fixed h-full overflow-hidden border-r transition-[width] duration-300 ${isOpen ? "w-60" : "w-11"}`}
    >
      <div className="scrollbar-none no-scrollbar flex h-full flex-col overflow-y-scroll">
        <div
          className={`flex h-12 min-h-12 items-center ${isOpen ? "justify-between pr-2" : "justify-end pr-1"}`}
        >
          <p
            className={`text-gray-default pl-4 font-semibold opacity-60 ${isOpen ? "" : "hidden"}`}
          >
            {SIDEBAR_TITLE_MENU}
          </p>
          <button
            className={`text-gray-default hover:bg-gray-brighten bg-main transition-[background-color, color, rotate] flex cursor-pointer justify-center rounded-xl p-1 duration-300 hover:text-white ${isOpen ? "" : "rotate-y-180"}`}
            onClick={() => handleOpen()}
          >
            <SvgSidebarHide />
          </button>
        </div>
        <div className="flex flex-col pb-4">
          <Record
            isOpen={isOpen}
            icon={<UserImg />}
            label={SIDEBAR_MY_FEED_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgFollowing />}
            label={SIDEBAR_FOLLOWING_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgExplore />}
            label={SIDEBAR_EXPLORE_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgHistory />}
            label={SIDEBAR_HISTORY_LABEL}
            to="#"
          />
        </div>
        <RecordsWrapper isOpen={isOpen} title={SIDEBAR_TITLE_CUSTOM_FEEDS}>
          <Record
            isOpen={isOpen}
            icon={<SvgPlus />}
            label={SIDEBAR_CUSTOM_FEED_LABEL}
            to="#"
          />
        </RecordsWrapper>
        <RecordsWrapper isOpen={isOpen} title={SIDEBAR_TITLE_NETWORK}>
          <Record
            isOpen={isOpen}
            icon={<SvgFindSquads />}
            label={SIDEBAR_FIND_SQUADS_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgPlus />}
            label={SIDEBAR_NEW_SQUAD_LABEL}
            to="#"
          />
        </RecordsWrapper>
        <RecordsWrapper isOpen={isOpen} title={SIDEBAR_TITLE_BOOKMARKS}>
          <Record
            isOpen={isOpen}
            icon={<SvgQuickSaves />}
            label={SIDEBAR_QUICK_SAVES_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgReadItLater />}
            label={SIDEBAR_READ_IT_LATER_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgPlus />}
            label={SIDEBAR_NEW_FOLDER_LABEL}
            to="#"
          />
        </RecordsWrapper>
        <RecordsWrapper isOpen={isOpen} title={SIDEBAR_TITLE_DISCOVER}>
          <Record
            isOpen={isOpen}
            icon={<SvgTags />}
            label={SIDEBAR_TAGS_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgSources />}
            label={SIDEBAR_SOURCES_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgLeaderboard />}
            label={SIDEBAR_LEADERBOARDS_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgDiscussion />}
            label={SIDEBAR_DISCUSSION_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgSubmitALink />}
            label={SIDEBAR_SUBMIT_LINK_LABEL}
            to="#"
          />
        </RecordsWrapper>
        <RecordsWrapper isOpen={isOpen} title={SIDEBAR_TITLE_RESOURCES}>
          <Record
            isOpen={isOpen}
            icon={<SvgAdvertise />}
            label={SIDEBAR_ADVERTISE_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgDocs />}
            label={SIDEBAR_DOCS_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgChangelog />}
            label={SIDEBAR_CHANGELOG_LABEL}
            to="#"
          />
          <Record
            isOpen={isOpen}
            icon={<SvgFeedback />}
            label={SIDEBAR_FEEDBACK_LABEL}
            to="#"
          />
        </RecordsWrapper>
      </div>
    </aside>
  );
};
