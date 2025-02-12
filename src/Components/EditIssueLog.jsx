import { useNavigate } from "react-router-dom";

export default function EditIssueLog({ documentId }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/editIssue")}
      className="w-[82px] h-[30px] bg-secondary text-primary border-none rounded-[180px] px-[25px] py-[6px] text-[16px] font-[500] st1-hover st1-active"
    >
      Edit
    </button>
  );
}
