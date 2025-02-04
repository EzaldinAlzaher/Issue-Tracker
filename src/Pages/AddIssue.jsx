export default function AddIssue() {
  return (
    <div className="bg-secondary px-[24px] md:px-[30px] 2xl:px-[65px] 2xl:flex 2xl:flex-col 2xl:items-center">
      <div className="flex flex-col 2xl:w-[1406px] 2xl:bg-[#00ADB433] 2xl:rounded-[20px] 2xl:my-[130px]">
        {/* Title of Page */}
        <h1 className="text-tertiary text-[24px] font-[700] text-center mt-[54px] mb-[44px] md:text-[40px] 2xl:text-[48px] 2xl:mb-[70px]">
          Add Issue
        </h1>
        {/* Inputs */}
        <form action="">
          <div className="2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 2xl:pl-[140px]">
            {/* Input Title */}
            <div className="mb-[18px] 2xl:mb-[40px]">
              <label
                className="text-tertiary text-[20px] font-[600] md:text-[28px] 2xl:text-[36px]"
                htmlFor="title"
              >
                Title
              </label>
              <br />
              <input
                className="w-[100%] h-[50px] bg-secondary rounded-[5px] pl-[10px] border-[2px] border-solid border-primary text-[16px] mt-[10px] outline-none md:h-[60px] md:text-[22px] 2xl:w-[482px] 2xl:h-[70px] 2xl:text-[28px] 2xl:mt-[22px]"
                type="text"
                placeholder="Enter title"
              />
            </div>
            {/* Input Description */}
            <div className="mb-[18px] 2xl:mb-[40px]">
              <label
                className="text-tertiary text-[20px] font-[600] md:text-[28px] 2xl:text-[36px]"
                htmlFor="desc"
              >
                Description
              </label>
              <br />
              <input
                className="w-[100%] h-[50px] bg-secondary rounded-[5px] pl-[10px] border-[2px] border-solid border-primary text-[16px] mt-[10px] outline-none md:h-[60px] md:text-[22px] 2xl:w-[482px] 2xl:h-[70px] 2xl:text-[28px] 2xl:mt-[22px]"
                type="text"
                placeholder="Enter description"
              />
            </div>
            {/* Input Image URL */}
            <div className="mb-[18px] 2xl:mb-[40px]">
              <label
                className="text-tertiary text-[20px] font-[600] md:text-[28px] 2xl:text-[36px]"
                htmlFor="img-url"
              >
                Image URL
              </label>
              <br />
              <input
                className="w-[100%] h-[50px] bg-secondary rounded-[5px] pl-[10px] border-[2px] border-solid border-primary text-[16px] mt-[10px] outline-none md:h-[60px] md:text-[22px] 2xl:w-[482px] 2xl:h-[70px] 2xl:text-[28px] 2xl:mt-[22px]"
                type="text"
                placeholder="Enter image URL"
              />
            </div>
            {/* Select Status */}
            <div className="mb-[18px] 2xl:mb-[40px]">
              <label
                className="text-tertiary text-[20px] font-[600] md:text-[28px] 2xl:text-[36px]"
                htmlFor="status"
              >
                Status
              </label>
              <br />
              <select
                name="status"
                className="w-[100%] h-[50px] bg-secondary rounded-[5px] text-[16px] text-tertiary px-[10px] border-[2px] border-solid border-primary mt-[10px] outline-none md:h-[60px] md:text-[22px] 2xl:w-[482px] 2xl:h-[70px] 2xl:text-[28px] 2xl:mt-[22px]"
              >
                <option value="" disabled selected>
                  Choose a status
                </option>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          {/* Button */}
          <div className="2xl:flex 2xl:justify-center">
            <button className="w-[100%] h-[40px] border-none bg-primary text-secondary text-[16px] font-[600] rounded-[30px] p-[10px] gap-[10px] mt-[70px] mb-[144px] md:h-[60px] md:text-[26px] md:mt-[160px] md:mb-[90px] 2xl:w-[708px] 2xl:h-[70px] 2xl:text-[30px] 2xl:mt-[80px] 2xl:mb-[48px]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
