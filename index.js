import {readFile, writeFile} from 'fs'
import path from 'path'

const sg_paths = ['.env_sg_client','.env_sg_server']
const id_paths = ['.env_id_client','.env_id_server']
const paths_to_replace = ['../../xfers-fazz/fazz-business/frontend/packages/dashboard-client/.env','../../xfers-fazz/fazz-business/frontend/packages/dashboard-server/.env']

paths_to_replace.forEach((element,index) => {
    const chosen_path = process.argv.slice(2)[0] === 'sg' ? sg_paths : id_paths

    try {
          readFile(chosen_path[index], 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
          
            writeFile(element, data, 'utf8', function (err) {
               if (err) return console.log(err);
            });
          });

          console.log("ENV FILES READY");
      } catch(err) {
        console.error(err)
      }    
});