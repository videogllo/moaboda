//default settings
var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");
var serviceAccount = require("../../firebaseKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = firestore.getFirestore();

/**
 * dongseob
 * firestore(nosql) vs RDB
 * collection - table
 * doc - column
 * set - row
 * 확인하시고 지워주세요
 */
const addData = async () => {
    await db.collection("youtube").doc("video").set({
        title: "title name",
        imgUrl: "https://www.naver.com",
        url: "https://www.daum.net",
    });
};

addData();


