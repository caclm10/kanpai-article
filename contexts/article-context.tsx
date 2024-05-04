"use client";

import { Dispatch, createContext, useContext, useReducer } from "react";

export type ARTICLE_ACTIONTYPE =
    | { type: "setDeleteId"; payload: number | string }
    | { type: "removeDeleteId" };

export interface ArticleContextState {
    idToDelete: string | number | null;
}

const initialState: ArticleContextState = {
    idToDelete: null,
};
export const ArticleContext = createContext<ArticleContextState>(initialState);

export const useArticle = () => useContext(ArticleContext);

export type ArticleContextDispatchState = Dispatch<ARTICLE_ACTIONTYPE> | null;

export const ArticleContextDispatch =
    createContext<ArticleContextDispatchState>(null);

export const useArticleDispatch = () => useContext(ArticleContextDispatch);

export const ArticleProivder = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(articleReducer, initialState);

    return (
        <ArticleContext.Provider value={state}>
            <ArticleContextDispatch.Provider value={dispatch}>
                {children}
            </ArticleContextDispatch.Provider>
        </ArticleContext.Provider>
    );
};

export const articleReducer = (
    state: ArticleContextState,
    action: ARTICLE_ACTIONTYPE
) => {
    switch (action.type) {
        case "setDeleteId":
            return {
                idToDelete: action.payload,
            };
        case "removeDeleteId":
            return {
                idToDelete: null,
            };
        default:
            return state;
    }
};
