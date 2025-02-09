import { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import axios from "axios";
import API from "../Services/API";
export default function ShwoIssues() {
  // State for storage Issues data
  const [dataIssues, setDataIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/issues`);
        setDataIssues(response.data.data);
      } catch (error) {
        console.log("There was an error fetching the issues!", error);
      }
    };

    fetchData();
  }, [dataIssues]);
  return (
    <div className="grid grid-cols-1 grid-rows-1 justify-items-center items-center md:p-[34px] md:grid-cols-2 md:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-4 2xl:p-[50px]">
      {dataIssues.map((item, idx) => (
        <IssueCard
          key={idx}
          imageUrl={item.imageUrl}
          title={item.title}
          desc={item.description}
          statues={item.issueStatus}
          time={item.createdAt}
          user={item.username}
          count={item.counter}
          documentId={item.documentId}
        />
      ))}
    </div>
  );
}
