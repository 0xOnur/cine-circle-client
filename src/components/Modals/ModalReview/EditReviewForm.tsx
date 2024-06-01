import { Flex } from "@chakra-ui/react";
import useEditReview from "hooks/TanStack/Mutation/Review/useEditReview";
import { useState } from "react";
import TitleInput from "./Inputs/Title.Input";
import CommentInput from "./Inputs/Comment.Input";
import SpoilerInput from "./Inputs/Spoiler.Input";
import SubmitButton from "@components/Auth/Inputs/Submit.Button";

interface IProps {
  review: IReview;
  onClose: () => void;
}

const EditReviewForm = ({ review, onClose }: IProps) => {
  const [newReview, setNewReview] = useState(review);

  const { mutate, isPending } = useEditReview({
    tmdbID: review.tmdbID,
    title: newReview.title,
    comment: newReview.comment,
    spoiler: newReview.spoiler,
    onClose,
  });

  const isDisabled = JSON.stringify(review) === JSON.stringify(newReview);

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
          text="Update Review"
          isLoading={isPending}
          loadingText="Updating..."
          isDisabled={isDisabled}
        />
      </Flex>
    </form>
  );
};

export default EditReviewForm;
