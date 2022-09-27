import useApi from "./useApi";
import { useMutation } from "react-query";

const usePostNewCard = () => {
  const { api, endpoints } = useApi();

  const { mutate, isLoading } = useMutation(
    () => api("post", "/card/add", { foo: "bar" }),
    {
      onSuccess: (response) => alert(response.data),
      onError: (err) => alert(`Error post a new card. err: ${err}`),
    }
  );
  return {
    isPostingNewCard: isLoading,
    postNewCard: mutate,
  };
};

export default usePostNewCard;
