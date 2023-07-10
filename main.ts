let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
let getal_1 = 0
let getal_2 = 0
let tijd = 1000
let getal_3 = 15
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        for (let index = 0; index < 60; index++) {
            for (let index = 0; index < 60; index++) {
                haloDisplay.setZipLedColor(getal_1, kitronik_halo_hd.colors(ZipLedColors.Indigo))
                haloDisplay.setZipLedColor(getal_2, kitronik_halo_hd.colors(ZipLedColors.Red))
                haloDisplay.setZipLedColor(getal_3, kitronik_halo_hd.colors(ZipLedColors.Yellow))
                haloDisplay.show()
                basic.pause(tijd)
                haloDisplay.clear()
                getal_1 += 1
            }
            getal_1 = 0
            getal_2 += 1
        }
        getal_2 = 0
        getal_3 += 1
    }
    getal_3 = 0
})
