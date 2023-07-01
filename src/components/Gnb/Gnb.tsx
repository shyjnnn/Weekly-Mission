import Image from "next/image";
import Link from "next/link";
import styles from "./Gnb.module.css";
import { getData } from "@/lib/getData";
import { userId } from "@/lib/common.api";
import { User } from "$/types";

export default async function Gnb() {
  const user = await getData<User>(`/api/users/${userId}`);
  const { image_source: profileSrc = "", email = "" } = user || {};

  return (
    <header className={styles.gnbContainer}>
      <nav className={styles.gnbWrap}>
        <Link href="/">
          <Image
            className={styles.logo}
            alt="logo"
            src="/assets/images/Linkbrary.svg"
            width={133}
            height={24}
          />
        </Link>
        {user ? (
          <div className={styles.profile}>
            {profileSrc && (
              <Image
                className={styles.profileIcon}
                src={profileSrc}
                alt="Profile Icon"
                width={28}
                height={28}
              />
            )}
            {email && <p className={styles.userEmail}>{email}</p>}
          </div>
        ) : (
          <Link href="/signin" className={styles.login}>
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
}
