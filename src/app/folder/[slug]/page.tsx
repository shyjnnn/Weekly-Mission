"use client";
import React, { useState, use, useContext } from "react";
import CardList from "@/components/CardList/CardList";
import { userId } from "@/utils/common.api";
import SearchBar from "$/src/components/SearchBar/SearchBar";
import FolderMenu from "$/src/components/FolderMenu/FolderMenu";
import FolderHeader from "$/src/components/FolderHeader/FolderHeader";
import CurrentTabContext from "@/contexts/CurrentTabContext";
import styles from "@/styles/folder.module.css";
import FolderTabsContext from "$/src/contexts/FolderTabsContext";

function FolderPage({ params }: { params: { [key: string]: string } }) {
  const folderId = params.slug;
  const { currentFolderTitle, setCurrentFolderTitle } =
    useContext(CurrentTabContext);

  return (
    <>
      <div className={styles.wrapper}>
        <FolderMenu
          currentTab={folderId}
          onCurrentFolderTitle={setCurrentFolderTitle}
        />
        <FolderHeader currentFolderTitle={currentFolderTitle} />
      </div>
      <div className={styles.cardWrapper}>
        <CardList userId={userId} folderId={folderId} />
      </div>
    </>
  );
}

export default FolderPage;
