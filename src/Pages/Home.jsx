import ActiveIssues from "../Components/ActiveIssues";
import NavBar from "../Components/NavBar";
import ShwoIssues from "../Components/ShwoIssues";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* Add Issue and Sorting the Issues */}
      <ActiveIssues />
      {/* Cards of Issues */}
      <ShwoIssues />
    </div>
  );
}
