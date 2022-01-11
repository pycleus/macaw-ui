import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const GiftCardLargeIcon = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5 7C4.44772 7 4 7.44772 4 8V13H6.1965C6.18957 12.9805 6.18283 12.9609 6.17629 12.9412C5.8413 11.9363 5.95516 10.6306 6.79292 9.79287C7.63063 8.95522 8.93633 8.84133 9.94126 9.17631C9.96087 9.18285 9.98046 9.18958 10 9.19652V7H5ZM10 12V13H8.99342C8.5074 12.9976 8.21391 12.7295 8.07365 12.3088C7.90862 11.8137 8.04476 11.3694 8.20708 11.2071C8.36945 11.0448 8.81375 10.9087 9.3088 11.0737C9.73142 11.2146 10 11.51 10 12ZM13.0066 13H12V12C12 11.51 12.2686 11.2146 12.6912 11.0737C13.1862 10.9087 13.6306 11.0448 13.7929 11.2071C13.9552 11.3694 14.0914 11.8137 13.9263 12.3088C13.7861 12.7295 13.4926 12.9976 13.0066 13ZM15.8035 13C15.8104 12.9805 15.8172 12.9609 15.8237 12.9412C16.1587 11.9363 16.0448 10.6306 15.2071 9.79287C14.3694 8.95522 13.0637 8.84133 12.0587 9.17631C12.0391 9.18285 12.0195 9.18958 12 9.19652V7H27C27.5523 7 28 7.44772 28 8V13H15.8035ZM4 24V15H8.58579L7.29289 16.2929C6.90237 16.6834 6.90237 17.3166 7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L10 16.4142V25H5C4.44772 25 4 24.5523 4 24ZM27 25H12V16.4142L13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L13.4142 15H28V24C28 24.5523 27.5523 25 27 25ZM30 24V14V8C30 6.34315 28.6569 5 27 5H5C3.34315 5 2 6.34315 2 8V24C2 25.6569 3.34315 27 5 27H27C28.6569 27 30 25.6569 30 24ZM17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20H25C25.5523 20 26 19.5523 26 19C26 18.4477 25.5523 18 25 18H17ZM16 22C16 21.4477 16.4477 21 17 21H18C18.5523 21 19 21.4477 19 22C19 22.5523 18.5523 23 18 23H17C16.4477 23 16 22.5523 16 22ZM21 21C20.4477 21 20 21.4477 20 22C20 22.5523 20.4477 23 21 23H25C25.5523 23 26 22.5523 26 22C26 21.4477 25.5523 21 25 21H21Z"
    fill="currentColor"
  />,
  "GiftCardLargeIcon"
);
(GiftCardLargeIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 32 32",
};
