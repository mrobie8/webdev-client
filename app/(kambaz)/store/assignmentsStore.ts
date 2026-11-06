"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until?: string;
    // Allow any extra fields added to assignments.json or by the editor
    [key: string]: unknown;
};

type AssignmentsStore = {
    assignments: Assignment[];
    addAssignment: (assignment: Assignment) => void;
    updateAssignment: (assignment: Partial<Assignment> & { _id: string }) => void;
    deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
    assignments: assignmentsJson as Assignment[],
    addAssignment: (assignment) =>
        set((state) => ({
            assignments: [
                ...state.assignments,
                { ...assignment, _id: crypto.randomUUID() },
            ],
        })),
    updateAssignment: (assignment) =>
        set((state) => ({
            assignments: state.assignments.map((a) =>
                // Merge so fields not included in the update are preserved
                a._id === assignment._id ? { ...a, ...assignment } : a,
            ),
        })),
    deleteAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.filter((a) => a._id !== assignmentId),
        })),
}));