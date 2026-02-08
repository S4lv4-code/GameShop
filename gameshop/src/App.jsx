import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Games from "./pages/games/Games";
import { GamesDetails } from "./pages/games/GamesDetails";
import Collections from "./pages/collections/Collections";
import { CollectionsDetails } from "./pages/collections/CollectionsDetails";
import { Profile } from "./pages/profile/Profile";
import { CollectionView } from "./pages/collections/CollectionView";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/games"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Games />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/games/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <GamesDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/games/new"
        element={
          <ProtectedRoute>
            <MainLayout>
              <GamesDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Collections />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/collections/:id/edit"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CollectionsDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/collections/:id/view"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CollectionView />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/collections/new"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CollectionsDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Profile />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
