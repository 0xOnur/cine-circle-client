import useCreateReview from "hooks/TanStack/Mutation/Review/useCreateReview";
import SubmitButton from "@components/Auth/Inputs/Submit.Button";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import TitleInput from "../Inputs/Title.Input";
import CommentInput from "../Inputs/Comment.Input";
import SpoilerInput from "../Inputs/Spoiler.Input";

interface IProps {
  username: string;
  tmdbID: string;
  mediaType: "movie" | "tv";
  onClose: () => void;
}

const CreateReviewForm = ({ username, tmdbID, mediaType, onClose }: IProps) => {
  const [newReview, setNewReview] = useState({
    username: username,
    tmdbID: tmdbID,
    title: `Review by ${username}`,
    comment: "",
    spoiler: false,
  });

  const { mutate, isPending } = useCreateReview({
    tmdbID,
    mediaType,
    title: newReview.title,
    comment: newReview.comment,
    spoiler: newReview.spoiler,
    onClose,
  });

  const isDisabled = !newReview.title || !newReview.comment;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate();
      }}
    >
      <Flex direction="column" gap="1rem">
        <TitleInput
          title={newReview.title}
          onChange={(e) =>
            setNewReview({ ...newReview, title: e.target.value })
          }
        />
        <CommentInput
          comment={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
        <SpoilerInput
          spoiler={newReview.spoiler}
          onChange={(e) =>
            setNewReview({ ...newReview, spoiler: e.target.checked })
          }
        />
        <SubmitButton
          text="Create"
          isLoading={isPending}
          loadingText="Creating..."
          isDisabled={isDisabled}
        />
      </Flex>
    </form>
  );
};

export default CreateReviewForm;
