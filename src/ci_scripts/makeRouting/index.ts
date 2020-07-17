import fs from "fs"
import path from "path"

export const makeRouting = () => {
    const files = fs.readdirSync(path.join(__dirname, "../../items"));

    fs.writeFileSync(path.join(__dirname, "../../../routing/items.ts"), `export const blogs = {
        ${
            files.map(file => {
                return `${file.replace(".md", "")}: \`${fs.readFileSync(path.join(__dirname, "../../items/" + file), "utf-8")}\``
            })
        }
    }`)
}

makeRouting();