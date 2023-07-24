// import { hash } from "bcrypt";
// import dbconn from "../mongoConn";
// import User from "../models/User";
// import path from "path"
// import fs from "fs/promises"
// import formidable from "formidable";

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }

// export default async function handler(req, res) {
//     await dbconn().catch(err => console.log("error conecting to db", err))
//     const { method } = req;

//     const fileDir = path.join(process.cwd(), "/assets/files")

//     switch (method) {
//         // getting data from the database
//         case "GET": 
//                 const user = await User.find()
//                     .then(() => {
//                         if (!user) {
//                             return res.status(400).json({ message: "No user data found" })
//                         }
//                     })
//                     .catch(err => console.log(err))
        

//         // posting/uploading data to the database
//         case "POST" : 
//             // const form = formidable();
//             // form.uploadDir = fileDir;

//             // const filePromise = new Promise((resolve, reject) => {
//             //     form.parse(req, (err, fields, files) => {
//             //         if (err) {
//             //             reject("Error fetching data");
//             //         }

//             //         const file = files.file;
//             //         if (!file || !file.name) {
//             //             reject("No data found");
//             //         }

//             //         const newPath = path.join(fileDir, file.name);

//             //         fs.rename(newPath, file.name, (err) => {
//             //             if (err) {
//             //                 reject("Error saving file");
//             //             }
//             //             // Resolve the promise with the filename
//             //             resolve(file.name);
//             //         });
//             //     });
//             // });

//             // // Wait for the filePromise to resolve, and then send the response
//             // try {
//             //     const filename = await filePromise;
//             //     return res.status(200).json({ message: "File successfully saved", filename });
//             // } catch (error) {
//             //     return res.status(400).json({ message: error });
//             // }
//                 let password = req.body.password;
//                 if (!password) {
//                     return res.status(400).json({ message: "Please provide your password" })
//                 }
//                 password = await bcrypt.hash(password, 10)
//                 const user = await User.create({ ...req.body, password: password })
//                 if (!user) {
//                     return res.status(401).json({ message: "Invalid Data" })
//                 }
//                 return res.status(200).json(user)
           


//         default:
//             return res.status(404).json({ message: "No data found" })
//     }
// }
