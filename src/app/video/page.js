'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '@/app/shared-theme/AppTheme';
import ColorModeSelect from '@/app/shared-theme/ColorModeSelect';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';



export default function FileByteReader() {
  const [file, setFile] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [output, setOutput] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const wsUrl = 'wss://5000--main--cuda--bong.app.goapi.cc/ws';
  const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
    wsUrl, // Replace with the correct WebSocket server URL
    { 
      share: false,
      onMessage: async (event) => {
        event.data.text().then(text => {
          try {
            console.log(text);
            switch (text) {
              case 'done':
                sendMessage('done');
                return;
              default:
                if (text.startsWith('byterange')) {
                  console.log("start message")
                  const [_, from, to] = text.split(' ');
                  console.log("byterange:" , from, to)
                  readFileByteRange(Number(from), Number(to)).then((data) => {
                    sendMessage(data);
                  });
                }
              }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        });     
      },        
    }
  );
  useEffect(() => {    
    if (readyState == 1) {
      console.log("ready");

    }
    return () => {
      console.log("cleanup");
    }
  }, [readyState]);

  const readFileByteRange = (from, to) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("Please select a file first."));
        return;
      }
  
      const reader = new FileReader();
      const slice = file.slice(from, to);
  
      reader.onload = (event) => {
        resolve(event.target.result); // Resolve with the ArrayBuffer
      };
  
      reader.onerror = reject; // Shortcut for rejecting with the error
  
      reader.readAsArrayBuffer(slice); // Read as ArrayBuffer
    });
  };
  const handleReadBytes = () => {
    if (readyState === 1) { // 1 = OPEN
      // sendMessage('client data');
      
      // console.log(getWebSocket().binaryType);
      // getWebSocket().binaryType = 'arraybuffer';
      const size = file.size;
      console.log("start", start, end, size)
      sendMessage(`start ${size} ${start} ${end}`);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <input type="file" onChange={handleFileChange} />
      <br />
      <label>Start Byte:</label>
      <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} />
      <br />
      <label>End Byte:</label>
      <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} />
      <br />
      <button onClick={handleReadBytes}>Read Bytes</button>
      <br />
      <pre>{output}</pre>
    </div>
  );
}