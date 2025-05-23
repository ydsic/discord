import "./SideChannelList.css";

export default function SideChannelList() {
  return (
    <div className="mainDiv">
      <div className="ChannelTitle">
        <p>디스코드 이름</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.732 23.7155C16.7083 22.7392 18.2912 22.7392 19.2675 23.7155L29.9998 34.4477L40.732 23.7155C41.7083 22.7392 43.2912 22.7392 44.2675 23.7155C45.2438 24.6918 45.2438 26.2747 44.2675 27.251L31.7675 39.751C30.7912 40.7274 29.2083 40.7274 28.232 39.751L15.732 27.251C14.7557 26.2747 14.7557 24.6918 15.732 23.7155Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>
      <div className="ChannelDiv">
        <div className="eventDiv">
          <svg
            width="20"
            height="20"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 9.25024H45.375V4.00024H40.125V9.25024H19.125V4.00024H13.875V9.25024H11.25C8.33625 9.25024 6.02625 11.6127 6.02625 14.5002L6 51.2502C6 52.6426 6.55312 53.978 7.53769 54.9626C8.52226 55.9471 9.85761 56.5002 11.25 56.5002H48C50.8875 56.5002 53.25 54.1377 53.25 51.2502V14.5002C53.25 11.6127 50.8875 9.25024 48 9.25024ZM48 51.2502H11.25V22.3752H48V51.2502ZM16.5 27.6252H29.625V40.7502H16.5V27.6252Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
          <p>이벤트</p>
        </div>
        <div className="ChannelLine" />
        <div className="ChannelTextChannel">
          <div className="TextChannelDiv">
            <div>
              <p>채팅 채널</p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.732 23.7155C16.7083 22.7392 18.2912 22.7392 19.2675 23.7155L29.9998 34.4477L40.732 23.7155C41.7083 22.7392 43.2912 22.7392 44.2675 23.7155C45.2438 24.6918 45.2438 26.2747 44.2675 27.251L31.7675 39.751C30.7912 40.7274 29.2083 40.7274 28.232 39.751L15.732 27.251C14.7557 26.2747 14.7557 24.6918 15.732 23.7155Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.9995 28.261H32.2218V10.4833H27.7773V28.261H9.99951V32.7055H27.7773V50.4833H32.2218V32.7055H49.9995V28.261Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </div>

          <div className="TextChannelListDiv">
            <svg
              width="20"
              height="16"
              viewBox="0 0 50 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.085 45.6504C9.30721 45.6504 8.71828 44.9453 8.85421 44.177L10.3686 35.6167H1.8563C1.07975 35.6167 0.491154 34.9138 0.625004 34.1462L1.0625 31.6378C1.16718 31.0377 1.68658 30.5998 2.2938 30.5998H11.2436L13.8936 15.5491H5.38131C4.60476 15.5491 4.01616 14.8461 4.15001 14.0787L4.58751 11.5702C4.69218 10.9701 5.21158 10.5322 5.81881 10.5322H14.7686L16.3605 1.53345C16.4664 0.934657 16.9851 0.498413 17.5912 0.498413H20.0521C20.8298 0.498413 21.4188 1.20346 21.2828 1.97182L19.7686 10.5322H34.7686L36.3605 1.53345C36.4663 0.934657 36.9851 0.498413 37.5913 0.498413H40.0521C40.8298 0.498413 41.4188 1.20346 41.2828 1.97182L39.7686 10.5322H48.2808C49.0573 10.5322 49.6461 11.2351 49.5121 12.0026L49.0746 14.5111C48.9701 15.1112 48.4506 15.5491 47.8433 15.5491H38.8936L36.2436 30.5998H44.7558C45.5323 30.5998 46.1211 31.3026 45.9871 32.0702L45.5496 34.5787C45.4451 35.1787 44.9256 35.6167 44.3183 35.6167H35.3685L33.7766 44.6155C33.6708 45.2142 33.1521 45.6504 32.5458 45.6504H30.085C29.3073 45.6504 28.7183 44.9453 28.8543 44.177L30.3685 35.6167H15.3686L13.7767 44.6155C13.6707 45.2142 13.152 45.6504 12.5459 45.6504H10.085ZM18.8947 15.5491L16.2447 30.5998H31.2445L33.8946 15.5491H18.8947Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
            <p>채팅 채널 </p>
          </div>

          <div className="TextChannelDiv">
            <div>
              <p>음성 채널</p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.732 23.7155C16.7083 22.7392 18.2912 22.7392 19.2675 23.7155L29.9998 34.4477L40.732 23.7155C41.7083 22.7392 43.2912 22.7392 44.2675 23.7155C45.2438 24.6918 45.2438 26.2747 44.2675 27.251L31.7675 39.751C30.7912 40.7274 29.2083 40.7274 28.232 39.751L15.732 27.251C14.7557 26.2747 14.7557 24.6918 15.732 23.7155Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.9995 28.261H32.2218V10.4833H27.7773V28.261H9.99951V32.7055H27.7773V50.4833H32.2218V32.7055H49.9995V28.261Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </div>

          <div className="TextChannelListDiv">
            <svg
              width="20"
              height="20"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4624 8.15491C27.5274 7.77121 26.4524 7.98299 25.7374 8.69559L15.0049 20.4211H7.50488C6.12988 20.4211 5.00488 21.5448 5.00488 22.9127V37.8623C5.00488 39.2327 6.12988 40.3539 7.50488 40.3539H15.0049L25.7374 52.0844C26.4524 52.797 27.5274 53.0113 28.4624 52.6251C29.3974 52.2389 30.0049 51.3294 30.0049 50.3203V10.4547C30.0049 9.45055 29.3974 8.53613 28.4624 8.15491ZM35.0049 12.9461V17.9293C41.8974 17.9293 47.5049 23.5205 47.5049 30.3875C47.5049 37.2568 41.8974 42.8455 35.0049 42.8455V47.8287C44.6549 47.8287 52.5049 40.0076 52.5049 30.3875C52.5049 20.7722 44.6549 12.9461 35.0049 12.9461ZM35.0049 22.9125C39.1399 22.9125 42.5049 26.2688 42.5049 30.3875C42.5049 34.5111 39.1399 37.8623 35.0049 37.8623V32.8791C36.3824 32.8791 37.5049 31.7603 37.5049 30.3875C37.5049 29.0146 36.3824 27.8958 35.0049 27.8958V22.9125Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>

            <p>일반 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
