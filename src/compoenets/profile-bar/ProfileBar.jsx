import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHeadset,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileBar.css";

export default function ProfileBar() {
  return (
    <div className="ProfileDiv">
      <div className="bottomDiv">
        <div className="profileBar">
          <img
            className="profileBarIcon"
            style={{ width: "40px" }}
            src="./images/discord.png"
          />
          <div className="namestate">
            <p className="profileName">이예도</p>
            <p className="profileState">온라인</p>
          </div>
          <div className="iconList">
            <FontAwesomeIcon icon={faMicrophone} />
            {/* <FontAwesomeIcon icon={faMicrophoneSlash} /> */}
            <FontAwesomeIcon icon={faHeadset} />
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
    </div>
  );
}
