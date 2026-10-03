import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1000"
          title="CS1000 Game Development"
          subtitle="Building 2D games with JavaScript"
          image="/images/gamedev.jpg"
        />
        <CourseCard
          id="2000"
          title="CS2000 Machine Learning"
          subtitle="Intro to neural networks and AI"
          image="/images/ml.jpg"
        />
        <CourseCard
          id="3000"
          title="CS3000 Cybersecurity"
          subtitle="Ethical hacking and network defense"
          image="/images/cyber.jpg"
        />
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/mobiledev.jpg"
        />
      </div>
    </div>
  );
}
