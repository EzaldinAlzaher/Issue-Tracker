import axios from "axios";
import IsImage from "./IsImage";
import API from "../Services/API";

const IssueCard = ({
  imageUrl,
  title,
  desc,
  statues,
  time,
  user,
  count,
  documentId,
}) => {
  // Handle delete issue
  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/issues/${documentId}`);
    } catch (error) {
      console.log("There was an error deleting the issue!", error);
    }
  };

  // Handle edit issue
  const handleEdit = () => {};
  return (
    <div className="w-[336px] h-[527px] rounded-[15px] border-[3px] border-solid border-primary m-[18px] relative">
      {/* Image */}
      <div>
        <IsImage imageUrl={imageUrl} />
      </div>
      <div className="h-[357px] bg-primary rounded-[15px] px-[22px] pt-[25px] pb-[15px] absolute bottom-[-2px] left-[-2px]">
        {/* Name of Issue */}
        <h3 className="text-[20px] font-[700] text-tertiary">{title}</h3>
        <hr className="border-none h-[0.5px] bg-tertiary my-[10px]" />
        {/* Desc of Issue */}
        <p className="w-[290px] h-[112px] text-secondary text-[20px] font-[500] leading-[24px]">
          {desc}
        </p>
        {/* Status of Issue */}
        <p className="text-[20px] text-secondary font-[500] mb-[15px]">
          <strong className="text-tertiary font-[700]">Status: </strong>
          {statues}
        </p>
        {/* Creation Time of Issue */}
        <p className="text-[20px] text-secondary font-[500]">
          <strong className="text-tertiary font-[700]">Created at: </strong>
          {new Date(time).toLocaleString()}
        </p>
        {/* User */}
        <p className="text-[20px] text-secondary font-[500] my-[15px]">
          <strong className="text-tertiary font-[700]">Publisher: </strong>
          {user}
        </p>
        {/* Buttons */}
        <div className="flex justify-between items-center mt-[30px]">
          <div className="border-[1px] border-solid border-secondary rounded-[100px] pt-[4px] pl-[6px] pr-[10px] gap-[8px] w-[82px] h-[30px] text-secondary flex justify-between items-center">
            {/* Button Decrement */}
            <button className="border-none bg-primary rounded-[100%]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="18" rx="9" fill="#F9F9F9" />
                <path
                  d="M14.25 9.7485H9.75H8.25H3.75V8.2485H8.25H9.75H14.25V9.7485Z"
                  fill="#00ADB4"
                />
              </svg>
            </button>
            {/* Count */}
            <span>{count}</span>
            {/* Button Increment */}
            <button className="border-none bg-primary rounded-[100%] ml-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="18" rx="9" fill="#F9F9F9" />
                <path
                  d="M14.25 9.7485H9.75V14.2485H8.25V9.7485H3.75V8.2485H8.25V3.7485H9.75V8.2485H14.25V9.7485Z"
                  fill="#00ADB4"
                />
              </svg>
            </button>
          </div>
          {/* Buttons Action */}
          <div className="flex justify-between items-center gap-x-[6px]">
            {/* Button of Edit */}
            <button className="w-[82px] h-[30px] bg-secondary text-primary border-none rounded-[180px] px-[25px] py-[6px] text-[16px] font-[500]">
              Edit
            </button>
            {/* Button of Delete */}
            <button
              onClick={handleDelete}
              className="w-[82px] h-[30px] bg-secondary text-primary border-none rounded-[180px] pl-[6px] py-[6px] text-[16px] font-[500]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
