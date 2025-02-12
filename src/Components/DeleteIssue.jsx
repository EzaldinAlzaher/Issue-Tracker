import axios from "axios";
import API from "../Services/API";
import { useState } from "react";

export default function DeleteIssue({ documentId }) {
  // Message on delete issue
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${API}/issues/${documentId}`);
      console.log(res);
      setMessage("Issue deleted successfully!");
    } catch (error) {
      console.log("There was an error deleting the issue!", error);
      setMessage("There was an error deleting the issue!");
    }
  };

  // Close modal on delete issue
  const closeModal = () => {
    setMessage("");
  };
  return (
    <>
      {/* Button of delete */}
      <button
        onClick={handleDelete}
        className="w-[82px] h-[30px] bg-secondary text-primary border-none rounded-[180px] pl-[6px] py-[6px] text-[16px] font-[500] st1-hover st1-active"
      >
        Delete
      </button>
      {/* Show message modal on delete issue */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-tertiary bg-opacity-50">
          <div className="bg-secondary p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Message</h2>
            <p>{message}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary text-secondary py-2 px-4 rounded border-none st2-hover st2-active"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
