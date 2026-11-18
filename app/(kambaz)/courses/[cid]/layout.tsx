"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import { type Course } from "../../store/coursesStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [course, setCourse] = useState<Course | undefined>(undefined);
  const [status, setStatus] = useState<"loading" | "allowed" | "denied">(
    "loading",
  );
  const [showCourseNav, setShowCourseNav] = useState(true);
  const router = useRouter();
  const { currentUser } = useAccountContext();

  useEffect(() => {
    const load = async () => {
      const list: Course[] = currentUser
        ? await client.findMyCourses()
        : await client.fetchAllCourses();
      const found = list.find((c) => c._id === courseId);
      setCourse(found);
      setStatus(found ? "allowed" : "denied");
    };
    load();
  }, [currentUser, courseId]);

  useEffect(() => {
    if (status === "denied") router.push("/dashboard");
  }, [status, router]);

  if (status !== "allowed") return null;

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
