import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

async function createUser() {
  return await axios
    .post("https://reqres.in/api/users", {
      email: "douglazalberto78@gmail.com",
      first_name: "Douglas",
      last_name: "Menjivar",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

const CreateUser = () => {
  const queryClient = useQueryClient();
  const mutattion = useMutation(createUser, {
    onSettled: () => {
      console.log("final");
    },

    onSuccess: (response) => {
      console.log(response);
      queryClient.setQueryData("USERS", (oldData) => {
        console.log(oldData);
        return {
          ...oldData,
          data: [
            ...oldData.data,
            {
              id: response.data.id,
              email: response.data.email,
              first_name: response.data.first_name,
              last_name: response.data.last_name,
              avatar: response.data.avatar,
            },
          ],
        };
      });
      console.log("success");
    },

    onError: (error) => {
      console.log("error" + error.getMessage());
    },
  });

  const handleOnclick = () => {
    mutattion.mutate();
  };

  return (
    <div>
      <button onClick={handleOnclick}>crear</button>
    </div>
  );
};

export default CreateUser;
