import React, { use } from "react";
import Image from "next/image";
import styles from "./PageInfo.module.css";
import { User, Folder } from "$/types";
import { fetchData } from "$/src/utils/fetchData";
interface PageInfoProps {
  folderId: string;
  sharedUserId: string;
}
export default function PageInfo({ sharedUserId, folderId }: PageInfoProps) {
  const user = use(
    fetchData<User[]>({ url: `/api/users/${sharedUserId}`, option: "no-store" })
  );

  const {
    image_source = "/assets/images/users/codeit-avatar.png",
    name = "@코드잇",
  } = user && user[0] ? user[0] : {};

  const folderTitleData = use(
    fetchData<Folder[]>({
      url: `/api/users/${sharedUserId}/folders/${folderId}`,
      option: "no-store",
    })
  );
  const { name: folder = "" } =
    folderTitleData && folderTitleData[0] ? folderTitleData[0] : {};

  return (
    <div className={styles.userInfo}>
      <div className={styles.codeitAvatar}>
        <Image src={image_source} alt="Avatar" width={64} height={64} />
      </div>
      <p className={styles.userName}>{name}</p>
      <h1 className={styles.pageHeading}>{folder}</h1>
    </div>
  );
}
