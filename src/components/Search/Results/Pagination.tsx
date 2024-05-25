import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MediaType } from "types/tmdb/Types";

interface PagButtonProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const PagButton = ({ children, active, disabled, onClick }: PagButtonProps) => {
  return (
    <Button
      w="fit-content"
      p={3}
      rounded="md"
      color="white"
      bg={active ? "darkPurple.600" : "darkPurple.500"}
      isDisabled={active || disabled}
      opacity={disabled ? 0.6 : 1}
      _hover={!disabled ? { bg: "darkPurple.600" } : {}}
      cursor={disabled ? "not-allowed" : "pointer"}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </Button>
  );
};

interface PaginationProps {
  page: number;
  total_pages: number;
  query?: string;
  media_type?: MediaType;
}

const Pagination = ({
  page,
  total_pages,
  query,
  media_type,
}: PaginationProps) => {
  if (total_pages > 500) {
    total_pages = 500;
  }

  const navigate = useNavigate();
  const handleNavigate = (newPage: number) => {
    if (query && media_type) {
      navigate(`?query=${query}&page=${newPage}&media_type=${media_type}`);
    } else if (query) {
      navigate(`?query=${query}&page=${newPage}`);
    } else if (media_type) {
      navigate(`?page=${newPage}&media_type=${media_type}`);
    } else {
      navigate(`?page=${newPage}`);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = page - 1; i <= page + 1; i++) {
      if (i > 0 && i <= total_pages) {
        buttons.push(
          <PagButton
            key={i}
            active={i === page}
            onClick={() => handleNavigate(i)}
          >
            {i}
          </PagButton>
        );
      }
    }
    return buttons;
  };

  return (
    <Flex justifyContent="center" py={50}>
      <SimpleGrid gap={2} w="fit-content" templateColumns="repeat(7, 1fr)">
        <PagButton disabled={page === 1} onClick={() => handleNavigate(1)}>
          <Icon as={ArrowLeftIcon} boxSize={3} />
        </PagButton>

        <PagButton
          disabled={page === 1}
          onClick={() => handleNavigate(page - 1)}
        >
          <Icon as={IoIosArrowBack} boxSize={3} />
        </PagButton>

        {renderPageButtons()}

        <PagButton
          disabled={page === total_pages}
          onClick={() => handleNavigate(page + 1)}
        >
          <Icon as={IoIosArrowForward} boxSize={3} />
        </PagButton>

        <PagButton
          disabled={page === total_pages || page === 500}
          onClick={() => handleNavigate(total_pages >= 500 ? 500 : total_pages)}
        >
          <Icon as={ArrowRightIcon} boxSize={3} />
        </PagButton>
      </SimpleGrid>
    </Flex>
  );
};

export default Pagination;
