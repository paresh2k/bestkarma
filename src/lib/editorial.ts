import profiles from '../../content-system/authors/profiles.json';

type Profile = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  expertise: string[];
};

const profileMap = profiles as Record<string, Profile>;

export function getEditorialProfile(id: string) {
  return profileMap[id];
}
