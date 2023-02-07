//Imports:
const factoryBrand  = require("./factory/Brand.js");
const Brand = require('./models/Brand.js');



class Main {

  //-----------------------------------------------------------------
  //Inicia a aplicação:
  //-----------------------------------------------------------------
  start_Msg() {
    console.log('********************************************************')
    console.log("Calsse main!\nIniciando...!");
    console.log('********************************************************\n')
  }


  instanciarBrand() {

    const brand = new Brand();
    console.log(brand.toJSON());

    const br = factoryBrand(15879879);

    console.log(br);

  }




  //-----------------------------------------------------------------
  //Finalizar a aplicação:
  //-----------------------------------------------------------------
  end_Msg() {
    console.log('\n********************************************************');
    console.log("Calsse main!\nFinalizou!");
    console.log('********************************************************');
  }

}

module.exports = Main;
