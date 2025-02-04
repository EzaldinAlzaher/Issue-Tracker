import IssueCard from "../Components/IssueCard";
import NavBar from "../Components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* Add Issue and Sorting the Issues */}
      <div className="h-[57px] bg-[#CCEFF0] p-[10px] flex justify-between items-center sticky top-0">
        <h2 className="text-tertiary text-[20px] font-[700]">My Issues</h2>
        <div className="">
          {/* Sorting */}
          <select className="w-[84px] h-[37px] bg-primary text-secondary rounded-[18px] border-none px-[14px] py-[9px] gap-[7px] outline-none">
            <option value="" selected disabled>
              Sort
            </option>
            <option value="open">Open</option>
            <option value="progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {/* Button add */}
          <button className="w-[115px] h-[37px] bg-primary text-secondary rounded-[18px] border-none px-[14px] py-[9px] gap-[1px] ml-[6px] text-center text-[15px] font-[600]">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8337 7.33165H6.83366V12.3316H5.16699V7.33165H0.166992V5.66498H5.16699V0.664978H6.83366V5.66498H11.8337V7.33165Z"
                fill="#F9F9F9"
              />
            </svg>
            Add Issue
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 place-content-center">
        <IssueCard />
      </div>
    </div>
  );
}
