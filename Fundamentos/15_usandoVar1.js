// variavel var é acessivel fora do escopo quando fora de 
// uma função ou seja é global.
{
    {
        {
            {
                var sera = 'Será???';
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123 // dentro da função será visivel somente dentro da função

}

console.log(local);