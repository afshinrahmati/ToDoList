import { HttpException, Injectable, Req,Body, Res } from '@nestjs/common';

import {Model} from 'mongoose';
import { ReGESTER } from './list.regester';

import { InjectModel } from '@nestjs/mongoose';

import {Usersinterface} from '../schema/user.Interfaces'


@Injectable()
export class ListService {

  //ERRROR For MongoDB
  // constructor(@InjectModel('Usersinterface') private readonly userModel: Model<Usersinterface>) {}
  

  //00000000 Post REGESTER 000000000
  public async PostRegester(user){
    

   
    
  }
  
  //11111111 Post Login 1111111
  
  public async PostLogin(user){
     console.log("Login");
     
  }
  




}
