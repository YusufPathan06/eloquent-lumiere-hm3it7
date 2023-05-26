import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER } from "../pages/query";
import CityDetails from "./city-details";
import UserAvatar from "./user-avatar";

const AccountFeed = () => {
  const { loading, error, data } = useQuery(GET_USER);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {data?.accounts?.map((user) => (
        <div className="feedsMainDiv">
          <>
            <UserAvatar user={user} />
            <div>
              {user?.banks?.map((city) => (
                <CityDetails city={city} />
              ))}
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default AccountFeed;
