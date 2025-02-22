import GithubIcon from "@/components/icon/GithubIcon";
import GoogleIcon from "@/components/icon/GoogleIcon";
import { Divider, Loader } from "@mantine/core";

type LoginFormPresentationalProps = {
  gitHubSignIn: () => void;
  setIsGithubLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isGithubLoading: boolean;
  googleSignIn: () => void;
  setIsGoogleLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isGoogleLoading: boolean;
};

export const LoginFormPresentational = ({
  gitHubSignIn,
  setIsGithubLoading,
  isGithubLoading,
  googleSignIn,
  setIsGoogleLoading,
  isGoogleLoading,
}: LoginFormPresentationalProps) => {
  return (
    <>
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5">
        <div className="md:max-w-sm mx-auto">
          <h1 className="text-lg font-bold text-center">Welcome back</h1>
          <Divider label="または" labelPosition="center" my="lg" />
          <div className="flex flex-col gap-4">
            <button
              className="rounded-md border border-gray-300 py-2 flex items-center justify-center"
              type="button"
              onClick={() => {
                setIsGithubLoading(true);
                gitHubSignIn();
              }}
            >
              <div className="flex items-center gap-2">
                {isGithubLoading ? (
                  <Loader color="gray" size="sm" />
                ) : (
                  <GithubIcon size="24" />
                )}
                <span>Gihub</span>
              </div>
            </button>
            <button
              className="rounded-md border border-gray-300 py-2 flex items-center justify-center"
              type="button"
              onClick={() => {
                setIsGoogleLoading(true);
                googleSignIn();
              }}
            >
              <div className="flex items-center gap-2">
                {isGoogleLoading ? (
                  <Loader color="gray" size="sm" />
                ) : (
                  <GoogleIcon size="24" />
                )}
                <span>Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
