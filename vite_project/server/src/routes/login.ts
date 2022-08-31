
module.exports = {
  install(app:any) { 
    app.post('/login.do',(req:any, res:any) => {
     console.log('server',req.body);
     
      let { sysCode, responseMessage } =  {
        sysCode: 0,
        responseMessage: 'DB query success!'
      };
      let responseData:Object
      if (sysCode ===0 ) {
        responseData = {  
          "playId": 1,
          "kioskId": 50,
          "msg": 'welcome',
        }
        console.log('responseData',responseData);
      }
    
      
      // Status.isLogin = sysCode === 0;
      setTimeout(() => {
        res.json({
          sysCode,
          detail: {
            responseMessage,
            responseData
          }
        });
      }, Math.random() * 3 * 1000);
    });
  }
}