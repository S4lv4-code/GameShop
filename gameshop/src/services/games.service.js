import pb from "./pocketbase";

export async function getGames() {
  return await pb.collection("games").getFullList({
    sort: "-created",
    // Esta es la clave: le pedimos a PB que busque si este juego está en una colección_games
    expand: "collection_games(game).collection" 
  });
}

export async function getGameById(id) {
  return await pb.collection("games").getOne(id);
}

export async function createGame(data) {
  // data ya debe ser un FormData si envías imágenes
  return await pb.collection("games").create(data);
}

export async function updateGame(id, data) {
  return await pb.collection("games").update(id, data);
}

export async function deleteGame(id) {
  return await pb.collection("games").delete(id);
}
