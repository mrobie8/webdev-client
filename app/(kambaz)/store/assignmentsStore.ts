"use client";

import { create } from "zustand";

export type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until?: string;
    [key: string]: unknown;
};

type AssignmentsStore = {
    assignments: Assignment[];
    setAssignments: (assignments: Assignment[]) => void;
    addAssignment: (assignment: Assignment) => void;
    updateAssignment: (assignment: Partial<Assignment> & { _id: string }) => void;
    deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
    assignments: [],
    setAssignments: (assignments) => set({ assignments }),
    addAssignment: (assignment) =>
        set((state) => ({ assignments: [...state.assignments, assignment] })),
    updateAssignment: (assignment) =>
        set((state) => ({
            assignments: state.assignments.map((a) =>
                a._id === assignment._id ? { ...a, ...assignment } : a,
            ),
        })),
    deleteAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.filter((a) => a._id !== assignmentId),
        })),
}));