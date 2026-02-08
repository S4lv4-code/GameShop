import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCollectionsWithCount } from "../../services/collections.service";
import CollectionCard from "../../components/collections/CollectionsCard";
import { Button } from "../../components/ui/Button";

function Collections() {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCollectionsWithCount().then(setCollections);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Mis Colecciones
        </h1>
        <Button onClick={() => navigate("/collections/new")}>
          + Crear Colección
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((col) => (
          <CollectionCard
            key={col.id}
            title={col.title}
            description={col.description}
            gamesCount={col.gamesCount}
            
            onView={() => navigate(`/collections/${col.id}/view`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Collections;
