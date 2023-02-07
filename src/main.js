//Imports:
import { Brand } from "./models/Brand.js"
import * as factoryBrand  from "./factory/Brand.js"


export class Main {

  //-----------------------------------------------------------------
  //Inicia a aplicação:
  //-----------------------------------------------------------------
  start_Msg() {
    console.log("Calsse main!\nIniciando...!");
  }


  instanciarBrand() {

    const brand = new Brand();
    console.log(brand.toJSON());

    var br = factoryBrand.makeAFakeBrand(123456);
    console.log(br);

  }








  //-----------------------------------------------------------------
  //Finalizar a aplicação:
  //-----------------------------------------------------------------
  end_Msg() {
    console.log("Calsse main!\nFinalizou!");
  }

}
