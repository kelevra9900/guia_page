import fs from 'fs';
import path from 'path';


export function getEnterprise(){
    try{
        const enterpriseDir = path.join(process.cwd());
    }catch(e){
        console.warn('🤡 no se encuentra la empresa');
    }
}