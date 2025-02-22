"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";
import { LoginFormPresentational } from "./presentational";

export const LoginFormContainer = () => {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const handleGitHubSignIn = () => {
    signIn("github");
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <LoginFormPresentational
      gitHubSignIn={handleGitHubSignIn}
      googleSignIn={handleGoogleSignIn}
      setIsGithubLoading={setIsGithubLoading}
      isGithubLoading={isGithubLoading}
      setIsGoogleLoading={setIsGoogleLoading}
      isGoogleLoading={isGoogleLoading}
    />
  );
};
