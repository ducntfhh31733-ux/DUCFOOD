const URL_TABLE = "http://localhost:3000/tables";
const URL_FOOD = "http://localhost:3000/food";

async function getAll(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data ;
    } catch (error) {
        console.log("co loi xay ra");
        
    }
}