const electron = require('electron');
const _ = require('lodash');

const { app, BrowserWindow, ipcMain, shell } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: { backgroundThrottling: false }
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});



ipcMain.on('mfjob:submit', async  (event, parameter1,racfid,racfpwd) => {
   console.log('I am in mainframe submit');
   console.log('parameter1:' + parameter1);
   console.log('racfid:' + racfid);
   console.log('racfpwd:' + racfpwd);


   const ftpExec = () => {

    try {
 
   var Client = require('ftp');

   var c = new Client();

   const ftpParameters = {
     "host": "10.101.101.10",
     "port": "3001",
     "user": racfid,
     "password": racfpwd,
   }

   c.connect(ftpParameters);

   c.on('ready', function() {
    c.list(function(err, list) {
      if (err) throw err;
      console.dir(list);
      c.end();
    });
   });

   c.ascii(function(err){
     if (err) throw err
   });

   c.site('FILETYPE=JES RECFM=FB LRECL=80 BLKSIZE=80',function(err) {
     if (err) throw err;
   })

   c.put('jclfile.txt','jclfile.txt',function(err) {
    if (err) throw err;
    else {
      return "Mainframe JOB submitted successfully"
    }
   })

   c.end();
  } catch(err) {
    return err
  }


  }

  // const results = await ftpExec();

  
      const results = "Mainframe JOB submitted successfully"

   mainWindow.webContents.send('mfjob:complete', results);
});

