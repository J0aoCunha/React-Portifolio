import Photo from "./Photo";
import TerminalWindow from "./TerminalWindow";
import { profile } from "../data/profile";

function Profile() {
  return (
    <TerminalWindow
      title="whoami"
      className="w-full items-center"
    >
      <div className="flex flex-col items-center gap-4">
        <Photo image={"https://github.com/J0aoCunha.png"} />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-ink font-bold text-lg leading-normal">
            {profile.name}
          </h1>
          <p className="text-muted font-normal text-xs leading-normal mt-1">
            {profile.role}
          </p>
          <p className="text-accent font-normal text-xs leading-normal mt-1">
            {profile.location}
          </p>
        </div>
      </div>
    </TerminalWindow>
  );
}

export default Profile;
