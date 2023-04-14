var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://ekyc-api.fiza.ai/v1/api/ekyc-verify/result/ocr?session_id=f70781468c01655f3c10&image_type=idcard',
  headers: { 
    'api_key': 'GLRG_DZbYoTUpef7ZMRHlT80ltvO_JHnfcNaz8WMeog'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
