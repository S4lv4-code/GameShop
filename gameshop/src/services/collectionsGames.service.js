import pb from "./pocketbase";

export async function getGamesByCollecion(collectionId) {
  // Obtenemos la lista expandiendo el campo 'game' para tener toda la info del juego
  return await pb.collection("collection_games").getFullList({
    filter: `collection="${collectionId}"`,
    expand: "game",
    sort: "-created"
  });
}

export async function getRelationByGame(gameId) {
  try {
    return await pb.collection("collection_games").getFirstListItem(`game="${gameId}"`);
  } catch {
    return null;
  }
}

export async function addGameToCollection(collectionId, gameId) {
  try {
    // Verificación: ¿Ya existe este juego en esta colección?
    const existing = await pb.collection("collection_games").getList(1, 1, {
      filter: `collection="${collectionId}" && game="${gameId}"`
    });

    if (existing.totalItems > 0) {
      console.log("El juego ya pertenece a esta colección.");
      return existing.items[0];
    }

    return await pb.collection("collection_games").create({
      collection: collectionId,
      game: gameId,
    });
  } catch (error) {
    console.error("Error al vincular juego y colección:", error);
    throw error;
  }
}

export async function removeGameFromCollection(recordId) {
  return await pb.collection("collection_games").delete(recordId);
}