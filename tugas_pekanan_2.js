const readline = require('readline');
const productBin = require('./product.json');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(`Silahkan pilih opsi soal : 
    1. Perhitungan akar kuadrat
    2. Perhitungan storage id berdasarkan product code
    
    => `, (option) => {
        if(option == 1){
            rl.question('Masukkan nilai X => ', (x) => {
                const regex=/^[0-9]+$/;

                if(!x.match(regex)){
                    console.log(`Input bukan integer`);

                    rl.close();
                } else{
                    if(x < 0){
                        console.log(`Tidak bisa input bilangan negatif`);
    
                    }else if(oddOrEven(x) === "odd"){
                        console.log(`Tidak bisa input bilangan ganjil`);
    
                    }else{
                        console.log(`Akar kuadrat dari ${x} => ${Math.sqrt(x)}`);
    
                    }

                    rl.close();
                }
            });
        }  else if(option == 2){
            rl.question('Masukkan product code => ', (productCode) => {
                if(productCode.length != 11){
                    console.log(`Jumlah karakter product code salah  => ${productCode.length}`);

                    rl.close();
                }else{
                    let count = 0;
                    productBin.data.forEach((product) => {
                        if(product.productCode === productCode){
                            count++;
                        }
                    });

                    console.log(`Jumlah storageId => ${count}`);
                    
                    rl.close();
                }
            });
        }
});


function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}