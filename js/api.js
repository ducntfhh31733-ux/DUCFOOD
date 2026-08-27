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

async function edit(url, item) {
  try {
    const response = await fetch(`${url}/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Item đã được cập nhật', data);
    return data;
  } catch (error) {
    console.error('Lỗi khi cập nhật', error);
  }
}