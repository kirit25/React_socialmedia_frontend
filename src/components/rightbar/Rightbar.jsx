import React from 'react'
import "./rightbar.css"
import { Users} from "../../dummyData"
import OnlineFriend from "../onlinefriend/OnlineFriend"

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return (
          <>
            <div className="birthdayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="" />
              <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
              </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u) => (
                <OnlineFriend key={u.id} user={u} />
              ))}
            </ul>
          </>
        );
      };
    
      const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/1.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Bill gates</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/2.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">marvin minsky</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/3.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Carter honest</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/4.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Amily warper</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/5.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">metina carps</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="/assets/person/6.jpg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">malisha khan</span>
              </div>
            </div>
          </>
        );
      };
      return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
      );
    }