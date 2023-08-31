import React, { useEffect } from "react";
import { GlobalStyle, LayoutWrapper } from "@/App.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Todo from "@/pages/Todo/Todo";
import Login from "@/pages/Login/Login";
import Ranking from "@/pages/Ranking/Ranking";
import Pet from "@/pages/Pet/Pet";
import MyPage from "@/pages/MyPage/MyPage";
import CategoryList from "@/pages/Category/CategoryList/CategoryList";
import CategoryPost from "@/pages/Category/CategoryPost/CategoryPost";
import { StyleSheetManager } from "styled-components";
// import NotFound from "@/pages/NotFound";

const routePaths = [
    {
        path: "/",
        element: <Login />,
        withHeader: false,
        withFooter: false
    },
    {
        path: "/category/list",
        element: <CategoryList />,
        withHeader: false,
        withFooter: false
    },
    {
        path: "/category/post",
        element: <CategoryPost />,
        withHeader: false,
        withFooter: false
    },
    { path: "/todo", element: <Todo />, withHeader: true, withFooter: true },
    { path: "/pet", element: <Pet />, withHeader: true, withFooter: true },
    { path: "/rank", element: <Ranking />, withHeader: true, withFooter: true },
    { path: "/mypage", element: <MyPage />, withHeader: true, withFooter: true }
];

const App: React.FC = () => {
    useEffect(() => {}, []);

    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    {routePaths.map((data) => (
                        <Route
                            key={data.path}
                            path={data.path}
                            element={
                                <StyleSheetManager
                                    shouldForwardProp={(prop) =>
                                        !["withheader", "withfooter"].includes(
                                            prop
                                        )
                                    }
                                >
                                    <LayoutWrapper
                                        withheader={data.withHeader.toString()}
                                        withfooter={data.withFooter.toString()}
                                    >
                                        {data.withHeader && <Header />}
                                        {data.element}
                                        {data.withFooter && <Footer />}
                                    </LayoutWrapper>
                                </StyleSheetManager>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </>
    );
};

export default App;
