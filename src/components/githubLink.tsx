import { buildUrl } from "@/utils/buildUrl";

export const GitHubLink = () => {
  return (
    <div>
      <a
        draggable={false}
        href="https://github.com/pixiv/ChatVRM"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="p-8 rounded-16 bg-[#1F2328] hover:bg-[#33383E] active:bg-[565A60] flex">
          <div className="w-[24px]">
            <img
              alt="https://github.com/pixiv/ChatVRM"
              height={24}
              width={24}
              src={buildUrl("/github-mark-white.svg")}
            ></img>
          </div>
          <div className="mx-8 text-white font-M_PLUS_2 font-bold">Fork me</div>
        </div>
      </a>
    </div>
  );
};
