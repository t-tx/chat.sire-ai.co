'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '@/app/shared-theme/AppTheme';
import ColorModeSelect from '@/app/shared-theme/ColorModeSelect';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import * as React from "react";
import Link from "next/link";

import { User } from "@/dto/user";

type Props = {
  data: User;
};

export default function ListItem({ data }: Props) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.id}</p>
    </div>
  )
}

