
async function fetchJcrContent(depsUrl,ckNode) {
    const url = depsUrl+ckNode+'.json'; // JSON 형식으로 데이터 가져오기
    let testMap = [];
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        $.each(data,function (index, value){
            testMap.push(value);
           console.log('JCR Content:', testMap);
        })
    } catch (error) {
        console.error('Error fetching JCR content:', error);
    }

    return testMap;
}

