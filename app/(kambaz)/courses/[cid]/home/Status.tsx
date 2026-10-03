import { FaCheckCircle, FaRegBell } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { LuImport, LuChartColumnIncreasing } from "react-icons/lu";
import {
  FaFileImport,
  FaList,
  FaBullhorn,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";

export default function CourseStatus() {
  const fullWidth =
    "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={fullWidth}>
        <LuImport className="me-2 text-lg" /> Import Existing Content
      </button>
      <button type="button" className={fullWidth}>
        <FaFileImport className="me-2 text-lg" /> Import from Commons
      </button>
      <button type="button" className={fullWidth}>
        <HiHome className="me-2 text-lg" /> Choose Home Page
      </button>
      <button type="button" className={fullWidth}>
        <FaList className="me-2 text-lg" /> View Course Stream
      </button>
      <button type="button" className={fullWidth}>
        <FaBullhorn className="me-2 text-lg" /> New Announcement
      </button>
      <button type="button" className={fullWidth}>
        <LuChartColumnIncreasing className="me-2 text-lg" /> New Analytics
      </button>
      <button type="button" className={fullWidth}>
        <FaRegBell className="me-2 text-lg" /> View Course Notifications
      </button>
      <button id="wd-ai-status" type="button" className={fullWidth}>
        <FaWandMagicSparkles className="me-2 text-lg" /> Sample action
      </button>
    </div>
  );
}
