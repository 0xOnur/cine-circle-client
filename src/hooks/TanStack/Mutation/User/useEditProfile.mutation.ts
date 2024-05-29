import { editProfile, updateReduxUser } from "@api/user.api";
import { useToast } from "@chakra-ui/react";
import { AppDispatch } from "@redux/config/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

interface IProps {
  username: string;
  onClose: () => void;
}

const useEditProfile = ({ username, onClose }: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const editProfileMutation = useMutation({
    mutationFn: (formData: FormData) => editProfile(formData),
    onSuccess: () => {
      onClose();
      dispatch(updateReduxUser(username));
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      toast({
        title: "Success",
        description: "Profile updated successfully",
        status: "success",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
      });
    },
  });

  return { editProfileMutation };
};

export default useEditProfile;
