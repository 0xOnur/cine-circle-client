// import { addToWatchlist, removeFromWatchlist } from "@api/user.api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useToast } from "@chakra-ui/react";

// interface IWatchlistMutation {
//   tmdbID: number;
//   mediaType: string;
// }

// export const useWatchlist = ({ tmdbID, mediaType }: IWatchlistMutation) => {
//   const queryClient = useQueryClient();
//   const toast = useToast();

//   const addWatchlistMutation = useMutation({
//     mutationKey: ["addToWatchlist", tmdbID],
//     mutationFn: () => addToWatchlist(tmdbID, mediaType),
//     onSuccess: (res) => {
//       // Query cache'i invalidate et
//       queryClient.invalidateQueries();
//       toast({
//         title: res.message || "Added to watchlist successfully",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     },
//     onError: (err) => {
//       toast({
//         title: err.message || "Failed to add to watchlist",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     },
//   });

//   const removeWatchlistMutation = useMutation({
//     mutationKey: ["removeFromWatchlist", tmdbID],
//     mutationFn: () => removeFromWatchlist(tmdbID, mediaType),
//     onSuccess: (res) => {
//       // Query cache'i invalidate et
//       queryClient.invalidateQueries();
//       toast({
//         title: res.message || "Removed from watchlist successfully",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     },
//     onError: (err) => {
//       toast({
//         title: err.message || "Failed to remove from watchlist",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     },
//   });

//   return { addWatchlistMutation, removeWatchlistMutation };
// };

const x = 1

export default x;