function make_tshirt(size:string="large",printMessage ="i love typescript")
{
    console.log(`creating a size ${size} shirt with the ${printMessage} print on shirt`)
}
make_tshirt()

make_tshirt("medium",)

make_tshirt("small", "i love javascript")