import pb from "./pocketbase";

export async function getGamesByCollecion(collectionId) {
  // Obtenemos la lista expandiendo el campo 'game' para tener toda la info del juego
  return await pb.collection("collection_games").getFullList({
    filter: `collection="${collectionId}"`,
    expand: "game",
    sort: "-created"
  });
}

export async function getRelationsByGame(gameId) {
  try {
    return await pb.collection("collection_games").getFullList({
      filter: `game="${gameId}"`
    });
  } catch {
    return [];
  }
}

export async function addGameToCollection(collectionId, gameId) {
  try {
    // Añadimos { requestKey: null } para evitar el auto-cancel
    const existing = await pb.collection("collection_games").getList(1, 1, {
      filter: `collection="${collectionId}" && game="${gameId}"`,
      requestKey: null 
    });

    if (existing.totalItems > 0) return existing.items[0];

    return await pb.collection("collection_games").create({
      collection: collectionId,
      game: gameId,
    }, { requestKey: null }); 
  } catch (error) {
    // Si el error es por cancelación, lo ignoramos silenciosamente
    if (error.isAbort) return; 
    console.error("Error al vincular:", error);
    throw error;
  }
}

export async function removeGameFromCollection(recordId) {
  return await pb.collection("collection_games").delete(recordId);
}