import axios from "axios";
import type { User } from "../../../account/AccountContext";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const findUsersForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return data;
};
export const createUserForCourse = async (courseId: string, user: Partial<User>) => {
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/users`, user);
    return data;
};
export const updateUser = async (user: User) => {
    const { data } = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return data;
};
export const deleteUser = async (userId: string) => {
    const { data } = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
    return data;
};