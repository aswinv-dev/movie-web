import { useState } from "react";

const useForm = (submitCallBack: any) => {
  const [state, setState] = useState<any>({});
  const onChangeHandler = (e: any) => {
    e.persist();
    setState((state: any) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    submitCallBack();
  };

  return [state, onChangeHandler, onSubmitHandler];
};

export default useForm;
