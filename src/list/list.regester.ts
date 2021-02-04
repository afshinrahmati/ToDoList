import { ApiProperty } from "@nestjs/swagger";
export class ReGESTER{
// !!!!! Username !!!!!
  @ApiProperty({
    type : String,
    description : 'You should complet that Name',
    default : 'Afshin110'
  })
  readonly Username : string;
  // !!!!! Email !!!!!
  @ApiProperty({
    type : Number,
    description : 'You should complet that email',
    default : "abcd@gmail.com"
  })
  readonly Email : string;
// !!!!! Password !!!!!
  @ApiProperty({
    type : Number,
    description : 'You should complet that Password',
    default : 1399
  })
  readonly password : Number;
  
}