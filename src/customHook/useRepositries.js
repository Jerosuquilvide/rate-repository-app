import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../grapgql/queys.js";
const useRepositories = () => {
    const {data = {}, loading} = useQuery(GET_REPOS);
    const {repositories = null} = data

    const repositoriesNode = repositories 
        ? repositories.edges.map(edge => edge.node)
        : []
    console.log(repositoriesNode);

    return {loading ,repositories : repositoriesNode}
}

export default useRepositories