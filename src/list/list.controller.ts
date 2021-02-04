import { Controller,
    Body,
    Get,
    Post,
    Delete,
    Put,
    Param,
    Query,
    Req,
    ValidationError,
    Res
     } from '@nestjs/common';
import {Request} from "express";
import  {ListService} from './list.service';
import {ApiCreatedResponse,ApiOkResponse,ApiResponse,ApiUnauthorizedResponse
,ApiProperty,ApiHeader,ApiTags,ApiExtension,ApiBody, ApiForbiddenResponse} from '@nestjs/swagger';
import {BodyApi} from '../schema/user.schema';

import {appendFileSync,existsSync,readFileSync,writeFileSync} from 'fs';

import { ReGESTER } from './list.regester';


// ***********Start************
//Router
@Controller('list')

//calss
export class ListController {

    //#########Path#########
    constructor(private listService : ListService){}
     
//0000000000 Post REGESTER 000000000
    @Post('regester')

    @ApiTags('REGESTER')
    @ApiHeader({ name: 'regeste',description: 'Name * Email * Pass'})
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiCreatedResponse({description: 'OK Regeste create'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
  
    async  PostRegester(@Body() createReGESTER: ReGESTER,@Body() body,@Req() req , @Res() res) {






        let a =   readFileSync('information.json','utf8');
       
        let b = JSON.parse(a);
        b.push(req.body)
        let d = JSON.stringify(b);

        writeFileSync('information.json',d, 'utf8');

  let Split = a.split("},");
      console.log(Split);
      


  
    
      
    // const NewUser = new BodyApi({
    //   name : "afshin",
    //   lastname : "rahmati"
    // })
    //  await NewUser.save();
      return res.json({
        "name" : "afshin"
      })

      

    };

//11111111 Post Login 1111111

    @Post('login')

    @ApiTags('LOGIN')
    @ApiHeader({ name: 'regeste',description: 'Name * Email * Pass',})
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async  PostLogin(user:any) {
      console.log("logiaan");
      
      return  this.listService.PostLogin(user);
    };
}

  