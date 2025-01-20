const fs = require('fs-extra')
const filepath = "./Users.json"

export const readData = async() =>{
    try {
        const data = await fs.readJson(filepath);
        return data; 
    } catch (error) {
        console.error('Error reading data from file: ', error);
        return [];
    }
};

export const writeData = async (data) => {
    try {
        await fs.writeJson(filepath, data);
        console.log('Data written to the file successfully')
    } catch (error) {
        console.log('Error writing to the file: ', error);
    }
}