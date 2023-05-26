import React from "react";

const UserAvatar = ({ user }) => {
  const getInitials = (name) => {
    let parts = name.split(" ");
    let initials = "";
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0];
      }
    }
    return initials;
  };
  return (
    <div className="avatarDiv">
      <div className="userAvatar">
        <span className="initials">
          {getInitials(user?.name ?? "John Doe")}
        </span>
      </div>
      {user?.name ?? "John Doe"}
    </div>
  );
};

export default UserAvatar;
