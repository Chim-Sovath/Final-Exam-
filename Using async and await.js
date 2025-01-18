function fetchData() {
    return  new Promise((reslove, reject) =>{
        setTimeout(()=>reslove ('Data fetched! Studnt Name:Chim Sovath'),1000); 
    });
}

async function fetchedAndProcessData() {
    try {
        console.log('Student Name:Chim Sovath');
        console.log('Using asyn/await:');
        const data = await fectchData();
        console.log(data);
        const processd = 'Processing data..';
        console.log(processd);
     } catch (error) {
        console.error('Error:', error);
    }
}
fetchedAndProcessData()