import axios from "axios";
import { useState } from "react";
import API from "../Services/API";
export default function AddIssue({ data }) {
  // State for Issue data
  const [issueInfo, setIssueInfo] = useState({
    title: "",
    description: "",
    imageUrl: "string",
    counter: 1,
    issueStatus: "",
    username: "Ezaldin Alzaher",
  });

  // State for modal message
  const [message, setMessage] = useState("");

  // Handle data on Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssueInfo({ ...issueInfo, [name]: value });
  };

  // Handle data On Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if
    if (issueInfo.title.trim() == "" || issueInfo.description.trim() == "") {
      setMessage("Please fill all the fields!");
    } else {
      try {
        const response = await axios.post(
          `${API}/issues`,
          (data = {
            data: {
              title: issueInfo.title,
              description: issueInfo.description,
              issueStatus: issueInfo.issueStatus,
              imageUrl: issueInfo.imageUrl,
              counter: issueInfo.counter,
              username: issueInfo.username,
            },
          })
        );
        console.log(response);
        setMessage("Issue saved successfully!");
        resetForm();
      } catch (error) {
        console.log("There was an error submitting the issue!", error);
        setMessage("There was an error submitting the issue!");
      } finally {
        // reset form on Submit data
        resetForm();
      }
    }
  };

  // Reset Form on submit
  const resetForm = () => {
    setIssueInfo({
      title: "",
      description: "",
      imageUrl: "string",
      counter: 1,
      issueStatus: "",
      username: "Ezaldin Alzaher",
    });
  };

  // Close modal
  const closeModal = () => {
    setMessage("");
  };

  return (
    <div className="bg-secondary px-[24px] md:px-[30px] 2xl:px-[65px] 2xl:flex 2xl:flex-col 2xl:items-center">
      <div className="flex flex-col 2xl:w-[1406px] 2xl:bg-[#00ADB433] 2xl:rounded-[20px] 2xl:my-[130px]">
        {/* Title of Page */}
        <h1 className="text-tertiary text-[24px] font-[700] text-center mt-[54px] mb-[44px] md:text-[40px] 2xl:text-[48px] 2xl:mb-[70px]">
          Add Issue
        </h1>
        {/* Inputs */}
        <form onSubmit={handleSubmit}>
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
                name="title"
                value={issueInfo.title}
                onChange={handleChange}
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
                name="description"
                value={issueInfo.description}
                onChange={handleChange}
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
                name="imageUrl"
                value={issueInfo.imageUrl}
                onChange={handleChange}
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
                name="issueStatus"
                className="w-[100%] h-[50px] bg-secondary rounded-[5px] text-[16px] text-tertiary px-[10px] border-[2px] border-solid border-primary mt-[10px] outline-none md:h-[60px] md:text-[22px] 2xl:w-[482px] 2xl:h-[70px] 2xl:text-[28px] 2xl:mt-[22px]"
                onChange={handleChange}
                value={issueInfo.issueStatus}
              >
                <option value="" disabled selected>
                  Choose a status
                </option>
                <option value="Open">Open</option>
                <option value="In-progress">In-progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
          {/* Button */}
          <div className="2xl:flex 2xl:justify-center">
            <button
              type="submit"
              className="w-[100%] h-[40px] border-none bg-primary text-secondary text-[16px] font-[600] rounded-[30px] p-[10px] gap-[10px] mt-[70px] mb-[144px] md:h-[60px] md:text-[26px] md:mt-[160px] md:mb-[90px] 2xl:w-[708px] 2xl:h-[70px] 2xl:text-[30px] 2xl:mt-[80px] 2xl:mb-[48px] st2-hover st2-active"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {/* Show message modal on save */}
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
    </div>
  );
}
