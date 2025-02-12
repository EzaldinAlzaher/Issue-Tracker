import ActiveIssues from "../Components/ActiveIssues";
import ShwoIssues from "../Components/ShwoIssues";

export default function Home() {
  return (
    <div>
      {/* Add Issue and Sorting the Issues */}
      <ActiveIssues />
      {/* Cards of Issues */}
      <ShwoIssues />
    </div>
  );
}
