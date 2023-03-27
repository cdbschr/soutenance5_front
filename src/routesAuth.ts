import InformationRoad from "./pages/client/roads/InformationRoad.svelte";
import ListAccountRoads from "./pages/client/roads/ListAccountRoads.svelte";
import ListAllRoads from "./pages/client/roads/ListAllRoads.svelte";
import PublishRoads from "./pages/client/roads/PublishRoads.svelte";
import SearchRoads from "./pages/client/roads/SearchRoads.svelte";

export const routesAuth = {
  "/roads": ListAllRoads,
  "/road/information/:id": InformationRoad,
  "/publish": PublishRoads,
  "/search": SearchRoads,
  "/roads/account": ListAccountRoads
};
