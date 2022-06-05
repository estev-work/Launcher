import * as fs from 'fs';
import * as path from 'path';

export class FileTool {
    constructor() {

    }
    read(fileName:string){
        let file = fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8');
        console.log(__dirname);
        console.log(file);
    }
}