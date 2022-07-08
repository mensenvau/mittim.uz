let isLove = (name) => {
    let time = new Date().getTime()
    if (name == 'Marjona') return "No. there is a guy :("
    if (time % 2 == 0) return "Yes of course :)))"
    return "Maybe you should think about it!"
}

let loveTest = (boy_name, girl_name) => {
    let ans = 0;
    ans = ans + parseInt(boy_name) + 2 * parseInt(girl_name)
    return "Your love test " + ans % 100 + "%"
}


let finish = () => {
    return `<a href="https://www.youtube.com/watch?v=_JO2ebHKheY"> WINTER SONATA OST Full Original Soundtrack </a>`
}

let start = () => {
    return `<a href="https://thoughtcatalog.com/lorenzo-jensen-iii/2015/04/50-timeless-pieces-of-advice-about-love-relationships/">50 Timeless Pieces Of Advice About Love & Relationships</a>`
}

let helpMe = () => {
    return `
It's just for those who didn't get their love, maybe even didn't have time to love.
The only thing that can help you is forgetting, and that's not possible . 

Bu faqat o'z sevgisini olmagan, ehtimol hatto sevishga ulgurmaganlar uchun.
Sizga yordam beradigan yagona narsa bu unutishdir va bu mumkin emas.

mensenvau 
/help - Help/Yordam.
/islove name - Find out if he loves you/U sizni sevishni aniqlash.
/lovetest boy_name girl_name - Love test/Sevgi testi.
/finish - It's all over/Hammasi tugadi.
/start - It's all started/Hammasi boshlandi.

some internet links:
https://github.com/mensenvau/mittim.uz
https://t.me/mensenvau
`
}


module.exports = {
    helpMe,
    isLove,
    loveTest,
    start,
    finish
}