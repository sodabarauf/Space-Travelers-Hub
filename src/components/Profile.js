import RocketsProfile from './RocketsProfile';
import MissionsProfile from './MissionsProfile';
import DragonsProfile from './DragonsProfile';

const Profile = () => (
  <div className="w-4/5 mx-auto my-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between">
    <RocketsProfile />
    <MissionsProfile />
    <DragonsProfile />
  </div>
);

export default Profile;