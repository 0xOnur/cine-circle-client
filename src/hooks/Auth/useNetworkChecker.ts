import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseToastOptions } from "@chakra-ui/react";

interface NetworkErrorEvent extends CustomEvent {
  detail: UseToastOptions;
}

const useNetworkChecker = () => {
  const toast = useToast();

  useEffect(() => {
    const handleNetworkError = (event: NetworkErrorEvent) => {
      toast({
        title: event.detail.title,
        description: event.detail.description,
        status: event.detail.status,
        duration: 5000,
      });
    };

    window.addEventListener(
      "network-error",
      handleNetworkError as EventListener
    );

    return () => {
      window.removeEventListener(
        "network-error",
        handleNetworkError as EventListener
      );
    };
  }, [toast]);
};

export default useNetworkChecker;
