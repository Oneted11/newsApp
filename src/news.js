const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=31789d30491e4d8884ff4c7e120c373b";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}
// getNews().then(console.log);