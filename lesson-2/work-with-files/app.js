const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async ({ filePath, action, data }) => {
    try {
        switch (action) {
        case "read":
            const resoult = await fs.readFile(filePath, "utf-8");
            // console.log(resoult.toString());
            console.log(resoult);
            break;
        case "add":
            const addResult = await fs.appendFile(filePath, data);
            break;
        case "replace":
            const resplaceResult = await fs.writeFile(filePath, data);
        default:
            return;
    }
    } catch (error) {
        console.log(error.message);
    }
    
}

const filePath = "./files/file.txt";

// fileOperation({filePath, action: "add", data: "\nIt is amaizing things!!!"});
fileOperation({filePath, action: "replace", data: "It is amaizing things!!!"});

// const fileOperation = async({filePath, action, data}) => {
//     try {
//         switch(action){
//             case "read":
//                 const result = await fs.readFile(filePath, "utf-8");
//                 console.log(result);
//                 // const text = result.toString();
//                 // console.log(text);
//                 break;
//             case "add":
//                 await fs.appendFile(filePath, data);
//                 break;
//             case "replace":
//                 await fs.writeFile(filePath, data);
//                 break;
//         }        
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const filePath = "./files/file.txt";

// fileOperation({filePath, action: "read"});
// fileOperation({filePath: "./files/file2.txt", action: "add", data: "\nНе плюйся - никто не носит золота во рту"});
// fileOperation({filePath: "./files/file3.txt", action: "replace", data: "Ницще"});

