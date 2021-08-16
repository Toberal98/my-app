import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

async function getData() {
  return await axios
    .get("https://reqres.in/api/users?page=2")
    .then((response) => {
      return response.data;
    });
}

export default function useUsers() {
  return useQuery("USERS", getData, {
    staleTime: 5000,
    notifyOnChangePropsExclusions: ["isStale"],
  });
}
