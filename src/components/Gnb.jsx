import { useContext } from "react";
import styled from "styled-components";
import LogoImg from "@assets/images/Linkbrary.svg";

import { UserContext } from "@contexts/UserContext";

export default function Gnb() {
  const { data: user } = useContext(UserContext);
  const { profileImageSource: profileSrc = "", email = "" } = user || {};

  return (
    <GnbContainer>
      <a href="/">
        <Logo alt="logo" src={LogoImg} />
      </a>
      {user ? (
        <Profile>
          {profileSrc && <ProfileIcon src={profileSrc} />}
          {email && <UserEmail>{email}</UserEmail>}
        </Profile>
      ) : (
        <Login href="/signin/">로그인</Login>
      )}
    </GnbContainer>
  );
}

const GnbContainer = styled.nav`
  background-color: var(--linkbrary-white-smoke);
  justify-content: space-between;
  display: flex;
  max-width: 192rem;
  margin: 0 auto;
  align-items: center;
  height: 9.4rem;
  padding: 0 20rem;

  @media screen and (max-width: 1199px) {
    padding: 0;
    gap: 53.8rem;
    justify-content: center;
  }

  @media screen and (max-width: 863px) {
    padding: 0 3.2rem;
    gap: 0;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 13.3rem;
  height: 2.4rem;
`;

const Login = styled.a`
  width: 12.8rem;
  height: 5.3rem;
  color: var(--button-white);
  background: linear-gradient(
    90.99deg,
    var(--linkbrary-primary) 0.12%,
    var(--button-sky-blue) 101.84%
  );
  border: 0;
  border-radius: 0.8rem;
  padding: 1.6rem 2rem;
  font-weight: 600;
  font-size: 1.8rem;

  @media screen and (max-width: 767px) {
    width: 8rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
`;

const UserEmail = styled.p`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  color: var(--linkbrary-dark-slate-gray);
  font-size: 1.4rem;
  line-height: 1.7rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
