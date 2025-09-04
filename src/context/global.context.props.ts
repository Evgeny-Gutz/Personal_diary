import type { Dispatch, SetStateAction } from "react";


interface UserState {
  name: string;
  isLogined: boolean;
}

export interface GlobalContextType {
    dataUser: UserState;
    setContextDataUser: Dispatch<SetStateAction<UserState>>;
}