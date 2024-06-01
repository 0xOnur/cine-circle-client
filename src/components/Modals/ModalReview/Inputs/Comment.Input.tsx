import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface IProps {
  comment: string;
  onChange: (e: any) => void;
}

const CommentInput = ({ comment, onChange }: IProps) => {
  return (
    <FormControl id="comment" isRequired>
      <FormLabel>Comment</FormLabel>
      <Textarea
        minLength={10}
        maxLength={1000}
        placeholder="Enter your comment here"
        value={comment}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default CommentInput;
