import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LibraryPage from "./pages/Library.tsx";
import CanteenPage from "./pages/Canteen.tsx";
import AnnouncementsPage from "./pages/announcements.tsx";
import ClubsPage from "./pages/Clubs.tsx";
import CalendarPage from "./pages/Calendar.tsx";
import Rdc from "./pages/Rdc.tsx";

const routers = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App />} >
            <Route index element={<Index />} />
            <Route path="/rdc" element={<Rdc />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/canteen" element={<CanteenPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>

    )
)
createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <RouterProvider router={routers} />
    </StrictMode>);


