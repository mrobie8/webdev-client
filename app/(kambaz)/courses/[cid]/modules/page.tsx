"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControl";
import Module from "./Module";
import * as client from "../../client";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);

  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);

  const onAddModule = async (name: string) => {
    const created = await client.createModuleForCourse(courseId, {
      name,
      description: "",
      lessons: [],
    });
    addModule(created);
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };
  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  return (
    <div>
      <ModulesControls onAddModule={onAddModule} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onUpdateModule={onUpdateModule}
            onRemoveModule={onRemoveModule}
          />
        ))}
      </ul>
    </div>
  );
}
