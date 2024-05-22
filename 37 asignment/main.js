function make_tshirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("creating a size ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
make_tshirt();
make_tshirt("medium");
make_tshirt("small", "i love javascript");
