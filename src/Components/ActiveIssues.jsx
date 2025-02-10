export default function ActiveIssues() {
  return (
    <div className="h-[57px] bg-[#CCEFF0] p-[10px] flex justify-between items-center sticky top-0 z-10 md:h-[85px] md:p-[20px] 2xl:h-[115px] 2xl:p-[30px]">
      <h2 className="text-tertiary text-[20px] font-[700] md:text-[36px] 2xl:text-[40px]">
        My Issues
      </h2>
      <div className="flex justify-center">
        {/* Sorting by status */}
        <select className="w-[84px] h-[37px] bg-primary text-secondary rounded-[18px] font-[600] border-none px-[14px] py-[9px] gap-[7px] outline-none md:w-[120px] md:h-[45px] md:text-[24px] md:rounded-[180px] 2xl:w-[158px] 2xl:h-[65px] 2xl:px-[34px] 2xl:text-[32px]">
          <option value="" defaultValue={true} disabled>
            Sort
          </option>
          <option value="Open">Open</option>
          <option value="In-progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        {/* Button add */}
        <button className="w-[115px] h-[37px] bg-primary text-secondary rounded-[18px] border-none flex justify-between items-center px-[14px] py-[9px] gap-[1px] ml-[6px] text-center text-[15px] font-[600] md:w-[165px] md:h-[45px] md:text-[24px] md:rounded-[180px] md:ml-[20px] 2xl:w-[244px] 2xl:h-[65px] 2xl:px-[34px] 2xl:text-[32px] st2-hover st2-active">
          <svg
            className="md:w-[14px] md:h-[14px] 2xl:w-[22px] 2xl:h-[22px]"
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
  );
}
