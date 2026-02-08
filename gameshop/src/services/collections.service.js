import pb from "./pocketbase";

export async function getCollections() {
  return await pb.collection("collections").getFullList({
    sort: "-created",
  });
}

export async function getCollectionById(id) {
  return await pb.collection("collections").getOne(id);
}

export async function createCollection(data) {
  return await pb.collection("collections").create(data);
}

export async function updateCollection(id, data) {
  return await pb.collection("collections").update(id, data);
}

export async function deleteCollection(id) {
  return await pb.collection("collections").delete(id);
}

export async function getCollectionStats(collectionId) {
  const result = await pb.collection("collection_games").getList(1, 1, {
    filter: `collection = "${collectionId}"`,
  });
  return result.totalItems;
}

export async function getCollectionsWithCount() {
  // Obtenemos todas las colecciones
  const collections = await pb.collection("collections").getFullList({ sort: "-created" });
  
  // Para cada colección, contamos cuántos juegos tiene en la tabla intermedia
  const collectionsWithCount = await Promise.all(collections.map(async (col) => {
    const games = await pb.collection("collection_games").getList(1, 1, {
      filter: `collection = "${col.id}"`
    });
    return { ...col, gamesCount: games.totalItems };
  }));

  return collectionsWithCount;
}