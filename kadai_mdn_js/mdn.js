const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // getMonth() は 0〜11 を返すので +1 する
const day = now.getDate();

console.log(`${year}年${month}月${day}日`);
