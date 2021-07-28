import Axios from "axios";

const API = Axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchAss = () => API.get("/Assignments");
export const createAss = newAss => API.post("/Assignments", newAss);
export const deleteAssignment = id => API.delete(`/Assignments/${id}`);

export const fetchvideo = () => API.get("/video");
export const createVideo = newvid => API.post("/video", newvid);
export const deletevideo = id => API.delete(`/video/${id}`);

export const updateAss = (id, updatedAssignment) =>
  API.patch(`/Assignments/${id}`, updatedAssignment);

export const grade = (id, grade) => API.patch(`/Assignments/${id}`, grade);

export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
