import { Fragment } from "react";
import "./style.scss";

type RenderValueType = {
  title: string;
  value: string;
  render?: (v: any) => any;
};

function UserInfo(props: IUser): JSX.Element {
  const { avatar_url, bio } = props;

  const renderValue = ({ title, value, render }: RenderValueType) => (
    <li>
      {render ? (
        render(props[value])
      ) : (
        <>
          {title} {props[value] !== null ? props[value] : "Not specified"}
        </>
      )}
    </li>
  );

  const renderDate = (value: string) => {
    const today = new Date(value);
    let dd: string = today.getDate().toString();
    let mm: string = (today.getMonth() + 1).toString();
    const yyyy = today.getFullYear();
    if (parseInt(dd) < 10) {
      dd = "0" + dd;
    }

    if (parseInt(mm) < 10) {
      mm = "0" + mm;
    }
    return mm + "-" + dd + "-" + yyyy;
  };

  const listItems = [
    { title: "Name:", value: "login" },
    { title: "Email:", value: "email" },
    { title: "Location:", value: "location" },
    {
      title: "Join date:",
      value: "created_at",
      render: (value: string) => <>Join date: {renderDate(value)}</>,
    },
    {
      title: "Followers",
      value: "followers",
      render: (value: number) => <> {value} Followers </>,
    },
    { title: "Following", value: "following" },
  ];

  // Not specified
  return (
    <div className="user-info-wrapper">
      <div className="user-info">
        <img src={avatar_url} className="user-avatar" alt="user-avatar"/>
        <ul>
          {listItems.map((item: RenderValueType) => (
            <Fragment key={item.title}>{renderValue(item)}</Fragment>
          ))}
        </ul>
      </div>
      <p>{bio !== null ? bio : "Biography not specified"}</p>
    </div>
  );
}

export default UserInfo;
