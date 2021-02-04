import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { Logger } from '@nestjs/common';
let Port = 8000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const options = new DocumentBuilder()
  .setTitle("Api for TopsApp")
  .setDescription("I can make this")
  .setVersion('1.0.0')
  .build();


  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);

  





  await app.listen(Port,()=>{
    console.log(` SERVER RUN ON PORT : ${Port}`);
  });
}
bootstrap();
