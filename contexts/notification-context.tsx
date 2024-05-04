"use client";

import { Dispatch, createContext, useContext, useReducer } from "react";

export type NOTIFICATION_ACTIONTYPE =
    | {
          type: "set";
          payload: {
              title: string;
              description: string;
              variant: "primary" | "red";
          };
      }
    | { type: "clear" };

export interface NotificationContextState {
    title?: string;
    description?: string;
    variant?: "primary" | "red";
    isShow: boolean;
}

const initialState: NotificationContextState = {
    isShow: false,
};

export const NotificationContext =
    createContext<NotificationContextState>(initialState);

export const useNotification = () => useContext(NotificationContext);

export type NotificationContextDispatchState =
    Dispatch<NOTIFICATION_ACTIONTYPE> | null;

export const NotificationContextDispatch =
    createContext<NotificationContextDispatchState>(null);

export const useNotificationDispatch = () =>
    useContext(NotificationContextDispatch);

export const NotificationProivder = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(articleReducer, initialState);

    return (
        <NotificationContext.Provider value={state}>
            <NotificationContextDispatch.Provider value={dispatch}>
                {children}
            </NotificationContextDispatch.Provider>
        </NotificationContext.Provider>
    );
};

export const articleReducer = (
    state: NotificationContextState,
    action: NOTIFICATION_ACTIONTYPE
) => {
    switch (action.type) {
        case "set":
            return {
                ...action.payload,
                isShow: true,
            };
        case "clear":
            return initialState;
        default:
            return state;
    }
};
