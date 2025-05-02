import { useEffect, useState} from "react";

const useGithubRepos = (username, projetosPermitidos = []) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
  
    useEffect(() => {
      if (!username) return;
  
      const fetchRepos = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/repos`);
          if (!response.ok) throw new Error("Erro ao buscar repositórios");
  
          const data = await response.json();
  
          // Filtra só os nomes desejados, se foram passados
          const filtrados = projetosPermitidos.length > 0
            ? data.filter(repo => projetosPermitidos.includes(repo.name, repo.language, repo.html_url, repo.description, repo.homepage,))
            : data;
  
          setRepos(filtrados);
        } catch (error) {
          setErro(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchRepos();
    }, [username, projetosPermitidos]);
  
    return { repos, loading, erro };
  };
  
  export default useGithubRepos;
  