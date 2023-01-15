import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetAllNotifications } from '../apicalls/notifications';
import { GetUser } from '../apicalls/users';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import {
  SetCurrentUser,
  SetNotifications,
  SetSocket,
  SetUnreadCount,
} from '../redux/usersSlice';
import { io } from 'socket.io-client';
// const socket = io("https://sheyblogs-udemy.onrender.com/");
const socket = io('http://localhost:5000/');
