import ActiveIssues from "../Components/ActiveIssues";
import IssueCard from "../Components/IssueCard";
import NavBar from "../Components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* Add Issue and Sorting the Issues */}
      <ActiveIssues />
      {/* Cards of Issues */}
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center items-center md:p-[34px] md:grid-cols-2 md:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-4 2xl:p-[50px]">
        <IssueCard />
      </div>
    </div>
  );
}
