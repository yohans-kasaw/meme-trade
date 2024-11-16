import TokenTeleIcon from "@public/svg_icons/tokentele_btn.svg";
import TokenWebIcon from "@public/svg_icons/tokenweb_btn.svg";
import TokenXIcon from "@public/svg_icons/tokenx_btn.svg";
import TokenSourceIcon from "@public/svg_icons/pump_btn.svg";

import PeopleIcon from "@public/svg_icons/people.svg";
import PersonTickIcon from "@public/svg_icons/person_tick.svg";
import CommentsIcon from "@public/svg_icons/comments_icon.svg";
import MCIcon from "@public/svg_icons/MC.svg";
import PersonRichIcon from "@public/svg_icons/person_rich.svg";
import MushroomIcon from "@public/svg_icons/messhroom.svg";

const TokenDetails = ({
  token_ticker,
  token_name,
  comments_count,
  time_from_creation,
  top_10_holders_percentage,
  developer_percentage,
  total_holders,
  unique_holders,
  market_cap,
  external_links: { social_1, social_2, website } = {},
  source,
}) => {
  return (
    <div className="flex-grow flex flex-col gap-0.5">
      <div className="flex flex-row justify-start gap-0.5 text-xs">
        <div>{token_ticker}</div>
        <div className="text-accentGreen w-14 truncate">{token_name}</div>
        <div className="flex flex-row items-center gap-0.5">
          <CommentsIcon />
          {comments_count}
        </div>
      </div>
      <div className="flex flex-row justify-start gap-1 text-xs">
        <div>
          <div className="border border-accentBlue rounded px-0.5 text-accentBrightGreen">
            {time_from_creation}
          </div>
        </div>
        <div className="flex flex-row items-center gap-0.5 text-accentPink">
          <PersonRichIcon /> {top_10_holders_percentage}
        </div>
        <div className="flex flex-row items-center gap-0.5 text-accentGreen">
          <MushroomIcon /> {developer_percentage}
        </div>
      </div>
      <div className="flex flex-row justify-start gap-2 text-xs">
        <div className="flex flex-row items-center gap-0.5">
          <PeopleIcon /> {total_holders}
        </div>
        <div className="flex flex-row items-center gap-0.5">
          <PersonTickIcon /> {unique_holders}
        </div>
        <div className="flex flex-row items-center gap-0.5 text-accentBrightGreen">
          <MCIcon /> {market_cap}
        </div>
      </div>

      <div className="flex flex-row justify-start gap-0.5">
        <a
          href={social_1 || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={!social_1 ? "hidden" : ""}
        >
          <TokenXIcon />
        </a>
        <a
          href={social_2 || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={!social_2 ? "hidden" : ""}
        >
          <TokenTeleIcon />
        </a>
        <a
          href={website || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={!website ? "hidden" : ""}
        >
          <TokenWebIcon />
        </a>
        <a
          href={source || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={!source ? "hidden" : ""}
        >
          <TokenSourceIcon />
        </a>
      </div>
    </div>
  );
};

export default TokenDetails;
