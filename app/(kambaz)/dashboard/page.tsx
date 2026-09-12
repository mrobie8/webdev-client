import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2> <hr />
      <div id="wd-dashboard-courses">
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
          id="4000"
          title="CS4000 Mobile App Development"
          subtitle="Building apps with React"
          image="/images/mobiledev.jpg"
        />
      </div>
    </div>
  );
}
