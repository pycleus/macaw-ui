import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const SitesettingsLargeIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        viewBox="0 0 32 32"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m5.245 6.251.938-.94a1.938 1.938 0 0 1 2.033-.456c.552.2 1.3.501 2.24.901.4.17.847.174 1.248.007a1.71 1.71 0 0 0 .94-.994c.354-.958.614-1.616.808-2.068A1.986 1.986 0 0 1 15.28 1.5h1.33c.755 0 1.475.43 1.808 1.157.21.457.494 1.131.892 2.127.176.442.516.785.93.956.415.171.88.16 1.288-.026a46.97 46.97 0 0 1 2.093-.908 1.989 1.989 0 0 1 2.14.445l.913.912c.534.534.739 1.348.461 2.096a50.02 50.02 0 0 1-.87 2.136 1.747 1.747 0 0 0-.011 1.347c.18.436.527.763.94.916.975.36 1.644.624 2.104.82a1.986 1.986 0 0 1 1.202 1.829v1.279c0 .754-.428 1.473-1.152 1.806-.466.215-1.154.506-2.17.913-.397.159-.728.48-.901.903a1.74 1.74 0 0 0 .03 1.377c.422.921.703 1.568.886 2.024a1.987 1.987 0 0 1-.44 2.144l-.94.942a1.934 1.934 0 0 1-2.031.452c-.55-.2-1.296-.5-2.234-.9a1.613 1.613 0 0 0-1.253-.01 1.721 1.721 0 0 0-.945.999c-.355.954-.613 1.61-.806 2.06a1.987 1.987 0 0 1-1.829 1.204h-1.332c-.756 0-1.476-.43-1.808-1.156a49.128 49.128 0 0 1-.894-2.13 1.716 1.716 0 0 0-.925-.953 1.612 1.612 0 0 0-1.293.025c-.96.438-1.624.722-2.084.906a1.99 1.99 0 0 1-2.144-.445l-.915-.916a1.987 1.987 0 0 1-.46-2.095c.175-.473.45-1.153.87-2.135.181-.425.187-.913.01-1.342a1.634 1.634 0 0 0-.935-.912 47.524 47.524 0 0 1-2.106-.825A1.986 1.986 0 0 1 1.5 16.695V15.41c0-.756.43-1.476 1.157-1.809a50.73 50.73 0 0 1 2.162-.907c.395-.158.726-.477.899-.898a1.74 1.74 0 0 0-.029-1.382 47.664 47.664 0 0 1-.884-2.02 1.987 1.987 0 0 1 .44-2.143Zm2 .119a.438.438 0 0 1 .46-.105 46.19 46.19 0 0 1 2.164.871 3.106 3.106 0 0 0 2.41.012 3.214 3.214 0 0 0 1.772-1.859c.35-.947.6-1.578.78-1.997A.486.486 0 0 1 15.28 3h1.33c.19 0 .364.108.444.281.194.424.468 1.072.863 2.059a3.22 3.22 0 0 0 1.75 1.787 3.113 3.113 0 0 0 2.484-.049 45.519 45.519 0 0 1 2.024-.878.489.489 0 0 1 .525.112l.913.912a.487.487 0 0 1 .116.513c-.163.44-.427 1.094-.844 2.069a3.247 3.247 0 0 0-.018 2.508 3.14 3.14 0 0 0 1.807 1.75c.966.358 1.608.611 2.034.793a.488.488 0 0 1 .292.45v1.279c0 .19-.108.364-.28.444a47.72 47.72 0 0 1-2.1.883 3.14 3.14 0 0 0-1.732 1.727 3.24 3.24 0 0 0 .055 2.57c.418.912.688 1.534.858 1.958a.487.487 0 0 1-.11.526l-.94.94a.434.434 0 0 1-.455.104 46.597 46.597 0 0 1-2.16-.872 3.113 3.113 0 0 0-2.414-.014 3.22 3.22 0 0 0-1.779 1.862c-.35.945-.6 1.575-.778 1.993a.487.487 0 0 1-.45.293h-1.332a.486.486 0 0 1-.445-.281 47.873 47.873 0 0 1-.864-2.06 3.216 3.216 0 0 0-1.742-1.783 3.112 3.112 0 0 0-2.492.045c-.947.433-1.587.706-2.017.877a.49.49 0 0 1-.526-.111l-.916-.916a.487.487 0 0 1-.115-.513c.163-.44.426-1.093.843-2.067.337-.79.35-1.697.017-2.505a3.133 3.133 0 0 0-1.798-1.745 46.81 46.81 0 0 1-2.036-.797.486.486 0 0 1-.292-.449V15.41c0-.191.108-.365.281-.445.431-.197 1.09-.476 2.095-.878a3.136 3.136 0 0 0 1.729-1.72 3.24 3.24 0 0 0-.053-2.579 46.3 46.3 0 0 1-.855-1.953.487.487 0 0 1 .11-.525l.938-.94Z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      </SvgIcon>
    );
  }
);