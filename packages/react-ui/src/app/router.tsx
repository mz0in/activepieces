import { Navigate, createBrowserRouter } from "react-router-dom";
import { authenticationSession } from "../features/authentication/lib/authentication-session";
import AlertsPage from "./routes/settings/alerts";
import { Sidebar } from "@/components/layout/sidebar";
import ProjectSettingsLayout from "@/components/layout/settings-layout";
import AppearancePage from "./routes/settings/appearance";
import PiecesPage from "./routes/settings/pieces";
import AppConnectionsPage from "./routes/connections";
import TeamPage from "./routes/settings/team";
import IssuesPage from "./routes/issues";
import { FlowBuilderPage } from "./routes/flows/id";
import FlowsRunPage from "./routes/runs";
import { FlowsPage } from "../app/routes/flows";
import NotFoundPage from "./routes/404-page";
import { SignInPage } from "./routes/sign-in";
import { ResetPasswordPage } from "./routes/reset-password";

const AllowOnlyLoggedIn = ({ children }: { children: React.ReactNode }) => {
    if (!authenticationSession.isLoggedIn()) {
        return <Navigate to="/sign-in" replace />;
    }
    return children;
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/flows" />,
    },
    {
        path: "/flows",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <FlowsPage />
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/flows/:flowId",
        element: (
            <AllowOnlyLoggedIn>
                <FlowBuilderPage />
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/runs",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <FlowsRunPage />
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/issues",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <IssuesPage />
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/connections",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <AppConnectionsPage />
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/settings",
        element: (
            <Navigate to="/settings/alerts" />
        ),
    },
    {
        path: "/reset-password",
        element: (
            <ResetPasswordPage />
        ),
    },
    {
        path: "/sign-in",
        element: (
            <SignInPage />
        ),
    },
    {
        path: "/settings/alerts",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <ProjectSettingsLayout>
                        <AlertsPage></AlertsPage>
                    </ProjectSettingsLayout>
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/settings/appearance",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <ProjectSettingsLayout>
                        <AppearancePage></AppearancePage>
                    </ProjectSettingsLayout>
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/settings/pieces",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <ProjectSettingsLayout>
                        <PiecesPage></PiecesPage>
                    </ProjectSettingsLayout>
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/settings/team",
        element: (
            <AllowOnlyLoggedIn>
                <Sidebar>
                    <ProjectSettingsLayout>
                        <TeamPage></TeamPage>
                    </ProjectSettingsLayout>
                </Sidebar>
            </AllowOnlyLoggedIn>
        ),
    },
    {
        path: "/*",
        element: <Navigate to="/404" replace />,
    },
    {
        path: "/404",
        element: <NotFoundPage />,
    }
]);
