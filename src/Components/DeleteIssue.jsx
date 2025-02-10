import axios from "axios";
import API from "../Services/API";

export default function DeleteIssue({ documentId }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/issues/${documentId}`);
    } catch (error) {
      console.log("There was an error deleting the issue!", error);
    }
  };
  return <div></div>;
}
