import useEditProfile from "hooks/TanStack/Mutation/User/useEditProfile.mutation";
import SubmitButton from "@components/Auth/Inputs/Submit.Button";
import AboutInput from "@components/Auth/Inputs/About.Input";
import useFileUpload from "hooks/Other/useFileUpload";
import EditAvatar from "./EditAvatar";
import { Flex } from "@chakra-ui/react";
import LocationInput from "@components/Auth/Inputs/Location.Input";
import NameInput from "@components/Auth/Inputs/Name.Input";
import SurnameInput from "@components/Auth/Inputs/Surname.Input";

interface IProps {
  isChanged: boolean;
  userData: IUser;
  setUserData: React.Dispatch<React.SetStateAction<IUser>>;
  onClose: () => void;
}

const EditProfileForm = ({
  isChanged,
  userData,
  setUserData,
  onClose,
}: IProps) => {
  const { file, previewUrl, handleFileChange } = useFileUpload();
  if (file) isChanged = true;

  const { editProfileMutation } = useEditProfile({
    username: userData.username,
    onClose,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isChanged) return onClose();

    const formData = new FormData();
    userData.name && formData.append("name", userData.name);
    userData.surname && formData.append("surname", userData.surname);
    file && formData.append("avatar", file);
    userData.about && formData.append("about", userData.about);
    userData.location && formData.append("location", userData.location);

    e.preventDefault();
    editProfileMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={5}>
        <EditAvatar
          userData={userData}
          previewUrl={previewUrl}
          handleFileChange={handleFileChange}
        />
        <NameInput
          name={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />

        <SurnameInput
          lastName={userData.surname}
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
        />

        <LocationInput
          location={userData.location}
          onChange={(e) =>
            setUserData({ ...userData, location: e.target.value })
          }
        />

        <AboutInput
          about={userData.about}
          onChange={(e) => setUserData({ ...userData, about: e.target.value })}
        />

        <SubmitButton
          isDisabled={!isChanged}
          isLoading={editProfileMutation.isPending}
          text="Save Changes"
          loadingText="Saving..."
        />
      </Flex>
    </form>
  );
};

export default EditProfileForm;
